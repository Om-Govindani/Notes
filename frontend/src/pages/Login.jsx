import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";

const Login = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const [error,setError] = useState(null)
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded-2xl bg-white px-7 py-10">
                    <form onSubmit={handleLogin}>
                        <h4 className="text-2xl mb-7">Login</h4>
                        <input 
                        type="text" 
                        placeholder="Enter Email" 
                        className="input-box" 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        <PasswordInput value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <button type="submit" className="btn-primary">Log-in</button>
                        <p className="text-sm text-center mt-4">
                            Not Registered ?{" "}
                            <Link to="/Signup" className="font-medium text-primary underline">
                            Create an Account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login