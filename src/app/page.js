'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [lrn, setLrn] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [activeContent, setActiveContent] = useState("/");
  

useEffect(() => {
  

    setIsClient(true);

    if (activeContent === "signup") {
      router.push("/view/signup")
    }
  }, [activeContent, router]);

  
 

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lrn }),
    });

    
    if (response.ok) {
      setLoading(true);

            setTimeout(() => {
                setLoading(true);
                router.push(`/view?lrn=${lrn}`);
            }, 300);
    } else {
        const data = await response.json();
        alert(data.error || 'Login failed');
        setLoading(false);
    }
  };

  if (!isClient) return null; 

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/arellanoschool.jpg')] page bg-cover bg-fixed bg-no-repeat bg-center">
      {loading ? (   
      <div className="flex flex-row gap-2 justify-center items-center h-screen w-full bg-black opacity-90 bg-cover bg-center bg-no-repeat">
      <div className="block">
      
      <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>

<p className="mt-4 text-white">Loading... please wait</p>
      </div>
      
    </div>
      ) : (
    <div className="w-full max-w-md bg-[url('/laboratory.jpg')] bg-cover bg-center bg-no-repeat bg-fixed opacity-100 p-10 rounded-lg shadow-lg">
                <h2 className="text-[18px] font-bold text-white text-center mb-6">LOGIN</h2>
                
                <form onSubmit={handleLogin} id="login-form" className="space-y-4">

                <div>
                        <label htmlFor="lrn" className="block text-sm font-medium text-gray-700">
                            LRN
                        </label>
                        <input
                            type="number"
                            id="lrn"
                            
                            value={lrn}
                            onChange={(e) => setLrn(e.target.value)}
                            className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="123456789012"
                            required
                        />
                    </div>

                    
                    
            
                    
                    
                    

                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
                        >
                            Login
                        </button>
                    </div>
                </form>
                
                
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-100">
                        Not yet registered?{' '}
                        <Link href="#"  onClick={() => setActiveContent("signup")} className="signup text-indigo-600 hover:text-indigo-800">
                            Register
                        </Link>
                    </p>
                </div>
            
            </div>
      )}
            </div>
  );
}
