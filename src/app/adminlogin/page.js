'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isClient, setIsClient] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        
    
        const response = await fetch("/api/adminlogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
    
        
        if (response.ok) {
          setLoading(true);
    
                setTimeout(() => {
                    setLoading(true);
                    router.push('/admin');
                }, 300);
        } else {
            const data = await response.json();
            alert(data.error || 'Login failed');
            setLoading(false);
        }
      };
    if (!isClient) return null;

    return (
        
        <div className="flex items-center justify-center min-h-screen bg-[url('/arellanoschool.jpg')] page bg-cover bg-no-repeat bg-center">
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
             <div className="w-full max-w-md bg-[url('/laboratory.jpg')] bg-cover bg-no-repeat bg-fixed bg-center p-10 rounded-lg shadow-lg">
                <h2 className="text-[20px] font-bold text-center text-white mb-6">ADMIN LOGIN</h2>
                
                <form  id="login-form" className="space-y-4">

                <div>
                        <label htmlFor="username" className="block text-sm font-medium text-black">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-2 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-white">
                                                Password
                                            </label>
                                            <input
                                                type={showPassword ? 'text' : 'password'} 
                                                id="password"
                                                
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full p-2 border border-black rounded-md"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)} 
                                                className="absolute mt-[70px] ml-[-30px] top-[23.5rem] transform -translate-y-1/2"
                                            >
                                                {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                                            </button>
                                        </div>
                    
                    
                    

                    <div>
                        <button
                        onClick={handleLogin}
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
                        >
                            Login
                        </button>
                    </div>
                </form>
                {error && <p className="error">{error}</p>}
            
            </div>
        )}
            </div>
        
    )
}