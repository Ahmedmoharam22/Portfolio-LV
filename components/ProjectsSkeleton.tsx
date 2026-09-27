export default function ProjectsSkeleton() {
  return (
    <section className="w-full bg-zinc-950 py-32 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Header skeleton */}
        <div className="mb-24">
          <div className="h-3 w-28 bg-zinc-800 rounded animate-pulse mb-4" />
          <div className="h-12 w-3/4 bg-zinc-800 rounded animate-pulse" />
        </div>

        {/* Cards skeleton */}
        <div className="flex flex-col gap-32">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Image placeholder */}
              <div className="lg:col-span-7 overflow-hidden rounded-2xl w-full aspect-video bg-zinc-900 animate-pulse border border-zinc-800" />

              {/* Text placeholders */}
              <div className="lg:col-span-5 flex flex-col justify-center gap-4">
                <div className="h-3 w-24 bg-zinc-800 rounded animate-pulse" />
                <div className="h-8 w-3/4 bg-zinc-800 rounded animate-pulse" />
                <div className="flex flex-col gap-2">
                  <div className="h-3 bg-zinc-900 rounded animate-pulse" />
                  <div className="h-3 bg-zinc-900 rounded animate-pulse w-5/6" />
                  <div className="h-3 bg-zinc-900 rounded animate-pulse w-4/6" />
                </div>
                <div className="flex gap-2 flex-wrap mt-2">
                  {[0, 1, 2, 3].map((j) => (
                    <div
                      key={j}
                      className="h-6 w-16 bg-zinc-900 rounded animate-pulse"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
