"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Logout from "@/components/logout";

export default function Dashboard() {
  const [computers, setComputers] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const lrn = searchParams.get("lrn");
  const [lab, setLab] = useState("Comlab A");
  const [activeContent, setActiveContent] = useState('');

  useEffect(() => {
    if (activeContent === "logout") {
      router.push('/');
    }
  }, [activeContent, router]);

  

  

  useEffect(() => {
    fetch(`/api/admin/computers/${lab}`)
      .then((res) => res.json())
      .then((data) => setComputers(data));
  }, [lab]);

  const updateStatus = async (pc_number, status) => {
    await fetch("/api/admin/computers/status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, lab, pc_number, lrn}),
    });

    setComputers((prev) =>
      prev.map((pc) => (pc.pc_number === pc_number ? { ...pc, status: "Selected unit." } : pc))
    );
  };

  

  const handleSelectPC = async (pc_number) => {
    await fetch("/api/usage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lrn, lab, pc_number }),
    });
    
    setComputers((prev) =>
      prev.map((pc) => (pc.pc_number === pc_number ? { ...pc, status: "Selected unit." } : pc))
    );

    router.push("/view"); // Refresh dashboard
  };

  return (
    
      
      <div className="overflow-y-scroll bg-white h-screen">


<header className="bg-transparent shadow-md flex w-full py-2 items-center">
      
        
<img src='/logo1.jpg' className="w-10 h-10 rounded-full relative ml-2" />
      
            <div   className="flex text-[15px] justify-center text-center ml-4 "> 
                <a href="https://i.ytimg.com/vi/-oI7oVmi-zY/maxresdefault.jpg" className="text-black font-sans font-medium">Arellano University - Plaridel Campus</a> 
                <a href="https://tse3.mm.bing.net/th?id=OIP.kM6wVISijnt8BfOedNYMXQHaEK&pid=Api&P=0&h=180" className="text-blue-600 font-sans font-normal ml-2">Computer Laboratory Management System</a>
                
            </div>
            
          
            
            
          
            <div className="flex items-center grow px-6 flex-col-2 justify-end mt-1 text-[#a6a6a6]">
              <div className="gap-x-8 flex px-0 font-normal">
              
                
                
              
                  
                </div>
                
                
                
                    <div
                      className="mt-4"
                    >
                      
                      <Logout
  onMenuClick={setActiveContent}
 />
                    </div>
                  
              
            </div>
            
            
            </header>


            <section className="snap-start">
            <main className="sm:block sm:justify-center bg-[url('/labarellano.jpg')] bg-cover bg-center sm:items-center">
        
          <div className="md:text-center bg-black bg-opacity-80 p-5">
            
            <h1 className="animate-blinks duration-700 text-[40px] ml-[6rem] text-left font-bold text-white">Arellano University</h1>
              <h2 className="text-lg animate-blinksssss font-medium  text-left ml-[5.5rem] px-2 rounded-md opacity-80 text-gray-400">
              Welcome to Arellano Computer Laboratory System – streamlining access, <br/>enhancing learning, and supporting your academic journey. <br/>Let's create a smarter future together!</h2>
            
            
          </div>
          
          
            
            
              
            
            
          
          </main>
            </section>


<section className="snap-start text-gray-600 body-font">

<div className="px-20 py-10 mx-auto">
 

<div className="flex flex-col text-center w-full mb-2">



  
  
</div>
<div className="flex">
<h1 className="text-sm text-blue-600 font-thin ml-8">Select Laboratory:</h1>
      <select className="py-1 px-2 rounded-md -2 border mb-2 cursor-pointer -mt-1 ml-2" onChange={(e) => setLab(e.target.value)}>
        <option value="Comlab A">College Lab A</option>
        <option value="Comlab B">College Lab B</option>
        <option value="Comlab C">ICT Lab</option>
      </select>
      </div>
<h2 className="mt-10 text-blue-600 ml-8 mb-8">Dashboard - {lab}</h2>

<div className="px-5 space-x-10 mx-auto -mt-12">

<div className="flex flex-wrap -m-4">
{computers.map(({ pc_number, status }) => (
<div key={pc_number} className="xl:w-1/4 md:w-1/2 p-6  mb-20">
        <div className={`border rounded-lg shadow-xl ${status === "available" ? "bg-green-100" : status === "not available" ? "bg-red-100" : "bg-yellow-100"}`}>
        <div className="card">
          <img className="h-56 rounded w-full object-cover object-center" src="/computerlab.jpg" alt="content"/>
          <div className="card__content">
  
  {status === "available" && <button onClick={() => handleSelectPC(pc_number)} className="btn p-1 flex justify-center items-center ml-[3.8rem] mt-[3.8rem] opacity-100 leading-relaxed text-base px-6 py-1 rounded-md">Select</button>}
  </div>
</div>
          <div className="p-6">
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">STATUS</h3>
          <p className="capitalize">{status}</p>
          <h2 className="text-md font-thin leading-relaxed text-base text-black">{pc_number}</h2>
          </div>
        </div>
      </div>
      ))}
</div>

</div>

  </div>
  <footer className="text-gray-600 bg-black opacity-90 -mt-20 body-font">
  <div className="px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img src="/logo3.jpg" className="w-10 h-10 rounded-full"></img>
      <span className="ml-3 text-xl">Arellano University</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2025 A.U —
      <a href="https://arellano.edu.ph/sites/default/files/inline-images/inp-3.jpg" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Computer Laboratory Management System</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://tse1.mm.bing.net/th?id=OIP.cTG2-pNfKZ_1EgyvIScbVwHaFj&pid=Api&P=0&h=180" className="text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a href="https://tse1.mm.bing.net/th?id=OIP.cTG2-pNfKZ_1EgyvIScbVwHaFj&pid=Api&P=0&h=180" className="ml-3 text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a href="https://tse1.mm.bing.net/th?id=OIP.cTG2-pNfKZ_1EgyvIScbVwHaFj&pid=Api&P=0&h=180" className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a href="https://tse4.mm.bing.net/th?id=OIP.UpJB-O6ZFFI2ZGYgdjtPpQHaDt&pid=Api&P=0&h=180" className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
  </section>
  
  </div>
    
    
  );
}
