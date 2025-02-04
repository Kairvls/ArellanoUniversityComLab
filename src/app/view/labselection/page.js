"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from "next/navigation";

export default function LabSelection() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const lrn = searchParams.get("lrn");
    const [lab, setLab] = useState([]);

    useEffect(() => {
        fetch(`/api/admin/computers/${lab}`)
          .then((res) => res.json())
          .then(setLab);
          
          if(lab) {
          
          }
          else {
            alert('cannot sign in');
          }
      }, [lab]);
      router.push(`/?lrn=${lrn}&lab=${lab}`);
    

    return (
        <div className="p-4">
            <h2>Select Computer Lab</h2>
            <select className="p-2 border mt-2">
        <option value="Comlab A">Comlab A</option>
        <option value="Comlab B">Comlab B</option>
        <option value="Comlab C">Comlab C</option>
      </select>
      <button onClick={(e) => setLab(e.target.value)} className="block p-2 bg-green-500 text-white m-2">
                    Enter 
                </button>
        </div>
    );
}
