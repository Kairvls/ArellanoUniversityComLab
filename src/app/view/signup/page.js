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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [strand, setStrand] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [activeContent, setActiveContent] = useState("/view/signup");
  

  

  useEffect(() => {
      setIsClient(true);

      if(activeContent === "login") {
        router.push("/");
      }
    }, [activeContent, router]);

  const handleSignup = async (e) => {
    e.preventDefault();
    
    const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, lrn, gender, grade, section, email, password, strand }),
    });

    if (response.ok) {
        alert('Signup successful!');
        router.push('/');
    
    } else {
        alert('Signup failed');
    }
  };

  if (!isClient) return null; 

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/arellanoschool.jpg')] opacity-100 page bg-fixed bg-cover bg-no-repeat bg-center">
        
        
    <div className="bg-[url('/laboratory.jpg')] opacity-90 bg-cover bg-no-repeat bg-fixed bg-center p-8 rounded-lg shadow-lg w-[60rem]">
                <h2 className="text-[20px] font-bold text-center text-white mb-6">SIGN UP</h2>
                
                <form onSubmit={handleSignup} id="register-form" className="space-y-4 ">
                    <div className="flex justify-center space-x-10 ">
                <div className="block space-y-4 grow">
                    <div>
                        <label htmlFor="firstname" className="block text-sm font-medium text-black">
                            First Name
                        </label>
                        <input
                            
                            type="text"
                            id="firstname"
                            value={firstname}
                            placeholder="First Name"
                            onChange={(e) => setFirstname(e.target.value)}
                            className="w-full p-2 text-sm border border-black rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="lastname" className="block text-sm font-medium text-black">
                            Last Name
                        </label>
                        <input
                            
                            type="text"
                            id="lastname"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            className="w-full p-2 text-sm border border-black rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="lrn" className="block text-sm font-medium text-white">
                            LRN
                        </label>
                        <input
                            
                            type="number"
                            id="lrn"
                            placeholder="123456789012"
                            value={lrn}
                            onChange={(e) => setLrn(e.target.value)}
                            className="w-full text-sm p-2 border border-black rounded-md"
                            required
                        />
                    </div>

                    <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-white">
                        Gender
                        </label>
                    <select
          id="gender"
          
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="mt-1 block w-full px-1 text-sm py-2 border border-black rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
          required
        >
          
          <option className="text-black" value="Male">Male</option>
          <option className="text-black" value="Female">Female</option>
          <option className="text-black" value="Other">Other</option>
          
        </select>
                    </div>

                    

                    <div>
                        <label htmlFor="grade" className="block text-sm font-medium text-white">
                            Grade
                        </label>
                        <input
                            
                            type="number"
                            id="grade"
                            placeholder="11 / 12 / 1st Year"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            className="w-full text-sm p-2 border border-black rounded-md"
                            required
                        />
                    </div>
                    </div>

                    <div className="block space-y-4 w-[27rem]">

                    <div>
                        <label htmlFor="section" className="block text-sm font-medium text-black">
                            Section
                        </label>
                        <input
                            type="text"
                            id="section"
                            placeholder="ICT 2"
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                            className="w-full text-sm p-2 border border-black rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full text-sm p-2 border border-black rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-black">
                            Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'} 
                            id="password"
                            placeholder="**********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full text-sm p-2 border border-black rounded-md"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)} 
                            className="absolute mt-[70px] ml-[-30px] top-[18.4rem] transform -translate-y-1/2"
                        >
                            {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                        </button>
                    </div>

                    <div>
                    <label htmlFor="strand" className="block text-sm font-medium text-white">
                        Strand
                        </label>
                    <select
          id="strand"
          value={strand}
          onChange={(e) => setStrand(e.target.value)}
          className="mt-1 block w-full px-1 text-sm py-2 border border-black rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
          required
        >
          
          <option  className="text-black" value="ABM">ABM (Accountancy, Business, and Management)</option>
          <option  className="text-black" value="STEM">STEM (Science, Technology, Engineering, and Mathematics)</option>
          <option  className="text-black" value="ICT">ICT (Information and Communications Technology)</option>
          <option  className="text-black" value="HETG">HE (Home Economics - Tour Guiding)</option>
          <option  className="text-black" value="HECFB">HE (Home Economics - Cookery, Food and Beverages)</option>
          <option  className="text-black" value="HUMSS">HUMSS (Humanities and Social Sciences)</option>
        </select>
                    </div>
                    <div className="flex">
                    <img src='/logo3.jpg' className="w-[5rem] h-[5rem] rounded-full"/> <p className="ml-2 mt-3 font-sans text-white">Arellano University Computer Laboratory Management System</p>
                    </div>
                    </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="w-[30rem] ml-[13rem] bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
                        >
                            Sign Up
                        </button>
                    
                    </div>
                </form>

                <div className="mt-4 text-center">
                    <span className="text-sm text-white">
                        Already registered?{' '}
                        <Link
                            href="#"
                            id="show-login" onClick={(e) => setActiveContent("login")} className="login text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                            Login
                        </Link>
                    </span>
                </div>
        
            </div>
        
            </div>
    
  );
}
