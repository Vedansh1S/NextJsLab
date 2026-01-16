import Link from "next/link";

interface LabelledInputProps {
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  id: string;
}

function LabelledInput({
  label,
  placeholder,
  type = "text",
  id,
}: LabelledInputProps) {
  return (
    <div className="pt-4">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-semibold text-zinc-950 dark:text-zinc-100"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="
          w-full
          rounded-lg
          border border-zinc-200/50 dark:border-zinc-700/50
          bg-white/60 dark:bg-zinc-900/60
          backdrop-blur-xl
          p-2.5
          text-sm
          placeholder-zinc-400 dark:placeholder-zinc-500
          text-zinc-900 dark:text-zinc-100
          focus:border-zinc-500 dark:focus:border-zinc-500
          focus:ring-2
          focus:ring-zinc-500/50
          outline-none
          transition-all
        "
        required
      />
    </div>
  );
}

export default function SignupPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
      {/* Card */}
      <div className="z-10 w-full max-w-md">
        <div className="rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-6 sm:p-8 shadow-xl">
          <h1 className="mb-6 text-3xl sm:text-4xl font-extrabold text-center tracking-tight text-zinc-950 dark:text-zinc-100">
            Sign up
          </h1>

          <form className="space-y-2">
            <LabelledInput
              id="username"
              label="Username"
              placeholder="Choose a username"
            />

            <LabelledInput
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            <LabelledInput
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
            />

            <LabelledInput
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
            />

            <button
              type="submit"
              className="
                mt-8
                w-full
                rounded-lg
                bg-zinc-900 dark:bg-indigo-500
                px-5 py-2.5
                text-sm font-medium
                text-white
                hover:bg-zinc-800 dark:hover:bg-indigo-600
                transition-colors
              "
            >
              Sign up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-semibold text-zinc-900 dark:text-indigo-400 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
