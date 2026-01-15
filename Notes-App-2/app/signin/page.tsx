export default function Signin() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 ">
        <div
          className="
            absolute
            -top-[20%] -left-[10%]
            h-[150%] w-[80%]
            rotate-45
            bg-linear-to-br
            from-purple-700/30 via-indigo-500/5 to-transparent
            dark:from-indigo-500/30 dark:via-purple-500/5 dark:to-transparent
            blur-[70px]
            transform-gpu
          "
        />
        <div
          className="
            absolute
            -bottom-[10%] -right-[10%]
            h-[60%] w-[60%]
            rounded-full
            bg-radial
            from-purple-900/30 via-indigo-500/5 to-transparent
            dark:from-indigo-500/30 dark:via-purple-500/5 dark:to-transparent
            blur-[70px]
            transform-gpu
          "
        />
      </div>

      <div className="max-w-md w-full z-10">
        <div className="border border-gray-200 p-8 rounded-lg bg-zinc-50 shadow-md">
          <h1 className="mb-6 text-4xl font-extrabold  text-center tracking-tight">
            Sign in
          </h1>

          <div className="space-y-2">
            <LabelledInput
              label="Username"
              placeholder="Enter your username or Email"
            />

            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="123456"
            />

            <button
              type="button"
              className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        placeholder={placeholder}
        className="
        w-full 
        bg-zinc-50 
        border border-zinc-300
        text-zinc-900 
        text-sm 
        rounded-lg 
        focus:ring-2
        focus:ring-zinc-500
        focus:border-zinc-500 
        block 
        p-2.5 
        outline-none"
        required
      />
    </div>
  );
}