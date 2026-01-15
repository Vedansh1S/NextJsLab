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
        className="block mb-2 text-sm font-semibold text-black"
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
          border border-zinc-300
          bg-zinc-50
          p-2.5
          text-sm
          placeholder-gray-400
          text-zinc-900
          focus:border-zinc-500
          focus:ring-2
          focus:ring-zinc-500
          outline-none
        "
        required
      />
    </div>
  );
}

export default function SignupPage() {
  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-950 flex items-center justify-center p-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="
            absolute
            -top-[20%] -left-[10%]
            h-[150%] w-[80%]
            rotate-45
            bg-linear-to-br
            from-amber-600/30 via-orange-100/5 to-transparent
            blur-[70px]
            transform-gpu
          "
        />
      </div>

      {/* Card */}
      <div className="z-10 w-full max-w-md">
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow">
          <h1 className="mb-6 text-4xl font-extrabold  text-center tracking-tight">
            Sign in
          </h1>

          <form className="space-y-2">
            <LabelledInput
              id="username"
              label="Username"
              placeholder="Enter your username"
            />

            <LabelledInput
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
            />

            <button
              type="submit"
              className="
                mt-8
                w-full
                rounded-lg
                bg-zinc-800
                px-5 py-2.5
                text-sm font-medium
                text-white
                hover:bg-zinc-900
              "
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
