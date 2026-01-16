import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-100">
            Dashboard
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Welcome back! Here's an overview of your account.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <StatCard
            title="Total Users"
            value="1,234"
            description="Active users this month"
          />
          <StatCard
            title="Revenue"
            value="$12,345"
            description="Total revenue this month"
          />
          <StatCard
            title="Growth"
            value="+23%"
            description="Compared to last month"
          />
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-4 sm:p-6 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 mb-4 sm:mb-6">
            Recent Activity
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <ActivityItem
              title="New user registration"
              description="John Doe signed up for an account"
              time="2 hours ago"
            />
            <ActivityItem
              title="Payment received"
              description="Payment of $99.00 processed successfully"
              time="5 hours ago"
            />
            <ActivityItem
              title="Profile updated"
              description="User profile information was updated"
              time="1 day ago"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 mb-4 sm:mb-6">
            Quick Actions
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              href="/"
              className="
                rounded-lg
                border border-zinc-200/50 dark:border-zinc-700/50
                bg-white/60 dark:bg-zinc-900/60
                backdrop-blur-xl
                px-6 py-3
                text-sm font-semibold
                text-zinc-800 dark:text-zinc-200
                hover:bg-zinc-100 dark:hover:bg-zinc-800
                transition-colors
                shadow-sm
                hover:shadow-md
              "
            >
              View Home
            </Link>
            <Link
              href="/signin"
              className="
                rounded-lg
                border border-zinc-200/50 dark:border-zinc-700/50
                bg-white/60 dark:bg-zinc-900/60
                backdrop-blur-xl
                px-6 py-3
                text-sm font-semibold
                text-zinc-800 dark:text-zinc-200
                hover:bg-zinc-100 dark:hover:bg-zinc-800
                transition-colors
                shadow-sm
                hover:shadow-md
              "
            >
              Sign In
            </Link>
            <button
              className="
                rounded-lg
                bg-zinc-900 dark:bg-indigo-500
                px-6 py-3
                text-sm font-semibold
                text-white
                hover:bg-zinc-800 dark:hover:bg-indigo-600
                transition-colors
                shadow-sm
                hover:shadow-md
              "
            >
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-6 shadow-xl">
      <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">
        {title}
      </h3>
      <p className="text-3xl font-extrabold text-zinc-950 dark:text-zinc-100 mb-1">
        {value}
      </p>
      <p className="text-xs text-zinc-500 dark:text-zinc-500">{description}</p>
    </div>
  );
}

function ActivityItem({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 pb-3 sm:pb-4 border-b border-zinc-200/50 dark:border-zinc-700/50 last:border-0 last:pb-0">
      <div className="flex-1">
        <h4 className="font-semibold text-sm sm:text-base text-zinc-950 dark:text-zinc-100">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          {description}
        </p>
      </div>
      <span className="text-xs text-zinc-500 dark:text-zinc-500 sm:whitespace-nowrap">
        {time}
      </span>
    </div>
  );
}
