import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  liveLink: string;
  whyBuilt: string;
  gallery: string[];
  year?: number;
  order: number;
  isVisible: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      required: [true, "Primary image URL is required"],
    },
    liveLink: {
      type: String,
      default: "#",
      trim: true,
    },
    whyBuilt: {
      type: String,
      default: "",
      trim: true,
    },
    gallery: {
      type: [String],
      default: [],
    },
    year: {
      type: Number,
      min: 2000,
      max: 2100,
    },
    order: {
      type: Number,
      default: 0,
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // adds createdAt + updatedAt automatically
  }
);

// Compound index: visible projects sorted by order asc, then newest first
ProjectSchema.index({ isVisible: 1, order: 1, createdAt: -1 });

// Prevent model re-compilation during hot reload
const Project =
  (models.Project as mongoose.Model<IProject>) ||
  model<IProject>("Project", ProjectSchema);

export default Project;
