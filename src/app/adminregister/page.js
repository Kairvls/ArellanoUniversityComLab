'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function Register() {
  
  const [isClient, setIsClient] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [lrn, setLrn] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");
  const [section, setSection] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [strand, setStrand] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [activeContent, setActiveContent] = useState("/view/signup");
  

  

  useEffect(() => {
      setIsClient(true);

      if(activeContent === "login") {
        router.push("/adminlogin");
      }
    }, [activeContent, router]);

    const handleSignup = async (e) => {
        e.preventDefault();
        
        const response = await fetch("/api/adminsignup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
    
        if (response.ok) {
            alert('Signup successful!');
            router.push('/adminlogin');
        
        } else {
            alert('Signup failed');
        }
      };
  if (!isClient) return null; 

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/arellano.jpg')] page bg-cover bg-no-repeat bg-center">
        
        
    <div className="bg-white p-8 rounded-lg shadow-lg w-[30rem]">
                <h2 className="text-2xl font-bold text-center mb-6">Admin Sign Up</h2>
                
                <form onSubmit={handleSignup} id="register-form" className="space-y-4 ">
                    <div className="flex justify-center space-x-10 ">
                <div className="block space-y-4 grow">
                    

                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'} 
                            id="password"
                            
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)} 
                            className="absolute mt-[70px] ml-[-30px] top-[21.8rem] transform -translate-y-1/2"
                        >
                            {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                        </button>
                    </div>

                    
                    
                    </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                        >
                            Sign Up
                        </button>
                    
                    </div>
                </form>

                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-600">
                        Already registered?{' '}
                        <Link
                            href="#"
                            id="show-login" onClick={(e) => setActiveContent("login")} className="login text-blue-500 hover:text-blue-600 font-medium"
                        >
                            Login
                        </Link>
                    </span>
                </div>
        
            </div>
        
            </div>
    
  );
}
