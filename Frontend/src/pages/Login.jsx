import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="w-full h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="box bg-[#1E293B] w-[95vw] flex flex-col gap-3 rounded-xl px-[5vw] py-[7vh] md:w-[30vw] md:px-[2vw] md:py-[5vh]">
            <h1 className="text-center text-[8vw] font-semibold text-white md:text-[3vw]">Sign in</h1>
            <label className="text-[5vw] text-white md:text-[1.5vw]" id="email">Email</label>
            <input className="p-2 border-1 outline-0 border-[#334155] rounded placeholder:text-[#757575] text-white" type="email" id="email" required placeholder="you@example.com"/>
            <label className="text-[5vw] text-white md:text-[1.5vw]" id="password">Password</label>
            <input className="p-2 border-1 outline-0 border-[#334155] rounded placeholder:text-[#757575] text-white" type="password" id="password" required placeholder="Your Password"/>

            <button className="bg-[#3B82F6] py-3 text-[5vw] font-semibold rounded-lg mt-5 md:text-[1.7vw] ">Sign in</button>

            <p className="text-center text-[#94A3B8]">Need an account? <Link className="text-[#3B82F6] font-semibold" to="/register">Create one</Link></p>
        </div>
    </div>
  )
}

export default Login