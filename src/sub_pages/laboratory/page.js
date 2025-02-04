"use client";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const [lab, setLab] = useState("Comlab A");
  const [computers, setComputers] = useState([]);
  const [pcNumber, setPcNumber] = useState("");
  const [usage, setUsage] = useState([]);
  

  const objectChange = async (status) => {
    if (status === "available") {
      return "bg-green-500";
    }
    else if (status === "not available") {
      return "bg-red-500";
    }
    else if (status === "under maintenance") {
      return "bg-yellow-500";
    }
    else {
      return null;
    }
  }

  useEffect(() => {
    fetch(`/api/admin/computers/${lab}`)
      .then((res) => res.json())
      .then((data) => setComputers(data));
  }, [lab]);

  useEffect(() => {
    fetch("/api/usage")
      .then((res) => res.json())
      .then(setUsage);
  }, []);

  const addPC = async () => {
    if (!pcNumber) return alert("Enter a PC Number!");

    await fetch("/api/admin/computers/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lab, pc_number: pcNumber }),
    });

    alert("PC Added!");
    setPcNumber("");
  };

  const updateStatus = async (pc_number, status) => {
    await fetch("/api/admin/computers/status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lab, pc_number, status }),
    });

    setComputers((prev) =>
      prev.map((pc) => (pc.pc_number === pc_number ? { ...pc, status } : pc))
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Manage Computers</h1>
      <select className="p-2 border mt-2" onChange={(e) => setLab(e.target.value)}>
        <option value="Comlab A">College Lab A</option>
        <option value="Comlab B">College Lab B</option>
        <option value="Comlab C">ICT Lab</option>
      </select>
      
      

      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">PC</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Set Status</th>
          </tr>
        </thead>
        <tbody>
          {computers.map(({ pc_number, status }) => (
            <tr key={pc_number}>
              <td className="p-2 border">{pc_number}</td>
              <td className="p-2 border">{status}</td>
              <td className="p-2 border">
                <img className="" src="/computer.jpg"></img>
                
                <button onClick={() => updateStatus(pc_number, "available")} className="tool tooltip px-2 py-1 border border-solid border-1px text-black ml-2">
                  <div className="flex">
                  
                Available
                </div>
                
              </button>

              <button onClick={() => updateStatus(pc_number, "not available")} className="tool tooltip px-2 py-1 border border-solid border-1px text-black ml-4 hover:bg-red-500">
                  <div className="flex">
                
                Not Available
                </div>
                
              </button>

              <button onClick={() => updateStatus(pc_number, "under maintenance")} className="tool tooltip px-2 py-1 border border-solid border-1px text-black ml-4 hover:bg-yellow-500">
                  <div className="flex">
                
                Under Maintenance
                </div>
                <span className="tooltiptext">set</span>
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
}
