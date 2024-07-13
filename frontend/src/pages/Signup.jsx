import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { validateEmail } from "../utils/helper";
import axiosInstance from "../utils/axiosInstance";

const Signup = ()=>{
    const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const [error,setError] = useState(null)
    const navigate = useNavigate();
    const handleSignup = async (e)=>{
        e.preventDefault();
        if(!name){
            setError("Please Enter you name");
            return;
        }
        if(!validateEmail(email)){
            setError("Please Enter a Valid Email")
            return
        }
        if(!password){
            setError("Please Enter Password")
            return
        }
        setError("");
        //sign up api call

        try {
            const response = await axiosInstance.post("/register", {
                name : name,
                email: email,
                password: password,
            });
            // Handle successful register response
            if (response.data && response.data.error) {
                setError(response.data.message)
                return;
            }
            if(response.data && response.data.accessToken)
            {
                localStorage.setItem("token",response.data.accessToken)
                navigate("/dashboard")
            }
        }catch (error) {
            // Handle register error
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("An unexpected error occurred. Please try again.");
                console.log(error);
            }
        }
    }
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded-2xl bg-white px-7 py-10">
                    <form onSubmit={handleSignup}>
                        <h4 className="text-2xl mb-7">Sign-up</h4>
                        <input 
                        type="text" 
                        placeholder="Enter Username" 
                        className="input-box" 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}
                        />
                        <input 
                        type="text" 
                        placeholder="Enter Email" 
                        className="input-box" 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        <PasswordInput value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
                        <button type="submit" className="btn-primary">Create Account</button>
                        <p className="text-sm text-center mt-4">
                            Already a member?{" "}
                            <Link to="/" className="font-medium text-primary underline">
                            Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup