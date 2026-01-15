import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 text-zinc-950">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            -top-[30%] -left-[20%]
            h-[160%] w-[90%]
            rotate-45
            bg-linear-to-br
            from-amber-500/30 via-orange-200/10 to-transparent
            blur-[90px]
          "
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
          Build faster.
          <span className="block text-zinc-500">Ship without friction.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
          A minimal authentication-first starter built with Next.js, Tailwind,
          and modern best practices.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/signup"
            className="
              rounded-lg
              bg-zinc-900
              px-6 py-3
              text-sm font-semibold
              text-white
              hover:bg-zinc-800
            "
          >
            Get Started
          </Link>

          <Link
            href="/signin"
            className="
              rounded-lg
              border border-zinc-300
              px-6 py-3
              text-sm font-semibold
              text-zinc-800
              hover:bg-zinc-100
            "
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard
            title="Next.js App Router"
            desc="File-based routing, layouts, and server components out of the box.
            Get the latest features from Next.js. No need for custom setups. Just works.
            Build fast, ship faster."
          />


          <FeatureCard
            title="Production Ready"
            desc="Designed to scale from side-project to real product. No need to re-architect later.
            Built-in authentication, database integration, and best practices.
            Focus on building your app, not the infrastructure."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="
        rounded-xl
        min-h-45
        border border-zinc-200
        bg-white
        p-6
        shadow-sm
        hover:shadow-md
        transition
      "
    >
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
    </div>
  );
}
