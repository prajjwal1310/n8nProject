import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-screen bg-[#0F172A] flex items-center justify-center">
      <div className="box bg-[#1E293B] w-[95vw] flex flex-col gap-3 rounded-xl px-[5vw] py-[7vh]">
        <h1 className="text-center text-[8vw] text-white">Sign in</h1>
        <label className="text-[5vw] text-white" id="email">
          Email
        </label>
        <input
          className="p-2 border-1 outline-0 border-[#334155] rounded placeholder:text-[#757575] text-white"
          type="email"
          id="email"
          required
          placeholder="you@example.com"
        />

        <div className="namefield flex gap-4">
          <div className="first flex flex-col gap-2">
            <label className="text-[5vw] text-white" id="password">
              First name
            </label>
            <input
              className="w-full p-2 border-1 outline-0 border-[#334155] rounded placeholder:text-[#757575] text-white"
              type="text"
              id="password"
              required
              placeholder="John"
            />
          </div>

          <div className="last flex flex-col gap-2">
            <label className="text-[5vw] text-white" id="password">
              Last name
            </label>
            <input
              className="w-full p-2 border-1 outline-0 border-[#334155] rounded placeholder:text-[#757575] text-white"
              type="text"
              required
              placeholder="Doe"
            />
          </div>
        </div>

        <label className="text-[5vw] text-white" id="password">
          Password
        </label>
        <input
          className="p-2 border-1 outline-0 border-[#334155] rounded placeholder:text-[#757575] text-white"
          type="password"
          required
          placeholder="Your Password"
        />

        <button className="bg-[#3B82F6] py-3 text-[5vw] font-semibold rounded-lg">
          Create Account
        </button>

        <p className="text-center text-[#94A3B8] mt-5">
          Already have an account?{" "}
          <Link className="text-[#3B82F6] font-semibold" to="/register">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
