import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32 text-center">
        

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-4 sm:mb-6 px-2">
          <span className="block bg-linear-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Launch Your Next
          </span>
          <span className="block text-zinc-500 dark:text-zinc-400 mt-1 sm:mt-2">
            Big Idea Today
          </span>
        </h1>

        <p className="mx-auto mt-6 sm:mt-8 max-w-3xl px-4 text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          The modern starter kit that gets you from zero to production in
          minutes.
          <span className="block mt-2 text-sm sm:text-base md:text-lg text-zinc-500 dark:text-zinc-500">
            Built with Next.js, TypeScript, and everything you need to ship
            fast.
          </span>
        </p>

        {/* CTA buttons */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
          <Link
            href="/signup"
            className="
              rounded-lg
              bg-zinc-900 dark:bg-indigo-500
              px-6 sm:px-8 py-3 sm:py-4
              text-sm sm:text-base font-semibold
              text-white
              hover:bg-zinc-800 dark:hover:bg-indigo-600
              transition-all
              shadow-lg hover:shadow-xl
              transform hover:scale-105
              text-center
            "
          >
            Start Building Free
          </Link>

          <Link
            href="/signin"
            className="
              rounded-lg
              border-2 border-zinc-300 dark:border-zinc-700
              px-6 sm:px-8 py-3 sm:py-4
              text-sm sm:text-base font-semibold
              text-zinc-800 dark:text-zinc-200
              hover:bg-zinc-100 dark:hover:bg-zinc-800
              transition-all
              backdrop-blur-sm
              text-center
            "
          >
            Sign In
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 px-4">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Setup in 2 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Free forever</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-100 mb-3 sm:mb-4 px-2">
            Everything You Need
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            All the tools and features to build, deploy, and scale your
            application
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon="⚡"
            title="Lightning Fast"
            desc="Built on Next.js 16 with App Router. Server components, streaming, and all the latest performance optimizations. Your app loads instantly, every time."
          />

          <FeatureCard
            icon="🔒"
            title="Secure by Default"
            desc="Authentication and authorization built-in. Industry-standard security practices from day one. Your users' data is protected."
          />

          <FeatureCard
            icon="🎨"
            title="Beautiful UI"
            desc="Modern design system with dark mode support. Glassmorphism effects, smooth animations, and a polished look that impresses."
          />

          <FeatureCard
            icon="📦"
            title="Production Ready"
            desc="Deploy to Vercel, AWS, or anywhere. Optimized builds, error handling, and monitoring. Scale from prototype to millions of users."
          />

          <FeatureCard
            icon="🛠️"
            title="Developer Experience"
            desc="TypeScript, ESLint, and best practices configured. Hot reload, error boundaries, and developer tools that make coding a joy."
          />

          <FeatureCard
            icon="🚀"
            title="Ship Faster"
            desc="Focus on your product, not the setup. Pre-configured routing, state management, and API patterns. Launch in days, not months."
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <StatItem number="10K+" label="Active Users" />
          <StatItem number="99.9%" label="Uptime" />
          <StatItem number="50ms" label="Avg Response" />
          <StatItem number="24/7" label="Support" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
        <div className="rounded-2xl border border-zinc-200/50 dark:border-zinc-700/50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-6 sm:p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-100 mb-4 sm:mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building the next
            generation of web applications.
          </p>
          <Link
            href="/signup"
            className="
              inline-block
              rounded-lg
              bg-zinc-900 dark:bg-indigo-500
              px-6 sm:px-8 py-3 sm:py-4
              text-sm sm:text-base font-semibold
              text-white
              hover:bg-zinc-800 dark:hover:bg-indigo-600
              transition-all
              shadow-lg hover:shadow-xl
              transform hover:scale-105
            "
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        rounded-xl
        border border-zinc-200/50 dark:border-zinc-700/50
        bg-white/60 dark:bg-zinc-900/60
        backdrop-blur-xl
        p-6
        shadow-sm
        hover:shadow-xl
        hover:scale-[1.01]
        transition-all duration-300
        group
      "
    >
      <div className="text-4xl mb-4 group-hover:scale-104 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 mb-3">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {desc}
      </p>
    </div>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 dark:text-zinc-100 mb-1 sm:mb-2">
        {number}
      </div>
      <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
        {label}
      </div>
    </div>
  );
}
