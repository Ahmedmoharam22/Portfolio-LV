import mongoose, { Mongoose } from "mongoose";
import dns from "dns";

// Fix Windows / local ISP DNS SRV lookup issues for MongoDB Atlas
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch {
  // Ignore if custom DNS cannot be set
}

const MONGODB_URI = (process.env.MONGODB_URI || process.env.DATABASE_URL)!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI or DATABASE_URL environment variable in .env.local"
  );
}

/**
 * Global cache to prevent multiple connections during hot-reload in dev.
 * In production each serverless invocation reuses the cached connection.
 */
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var __mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.__mongoose ?? { conn: null, promise: null };
global.__mongoose = cached;

export async function connectDB(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      family: 4, // Force IPv4 to resolve local ISP/DNS SRV issues
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .catch(async (err) => {
        // Fallback retry if querySrv failed
        if (err?.code === "ENOTFOUND" || err?.syscall === "querySrv") {
          console.warn(
            "SRV DNS lookup failed on primary DNS, retrying with public DNS..."
          );
          try {
            dns.setServers(["8.8.8.8", "1.1.1.1"]);
            return await mongoose.connect(MONGODB_URI, opts);
          } catch {
            throw err;
          }
        }
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
