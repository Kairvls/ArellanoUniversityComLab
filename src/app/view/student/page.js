"use client";
import { useState, useEffect } from "react";

export default function StudentPage() {
  const [lab, setLab] = useState("Comlab A");
  const [computers, setComputers] = useState([]);
  const [lrn, setLrn] = useState("");

  useEffect(() => {
    fetch(`/api/computers/${lab}`)
      .then((res) => res.json())
      .then((data) => setComputers(data));
  }, [lab]);

  const reservePC = async (pc_number) => {
    if (!lrn) return alert("Please enter your LRN!");

    await fetch("/api/usage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lrn, lab, pc_number }),
    });

    setComputers((prev) =>
      prev.map((pc) => (pc.pc_number === pc_number ? { ...pc, status: "not_available" } : pc))
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Select a Computer</h1>
      <input type="text" placeholder="Enter LRN" className="p-2 border" onChange={(e) => setLrn(e.target.value)} />
      <select className="p-2 border mt-2" onChange={(e) => setLab(e.target.value)}>
        <option>Comlab A</option>
        <option>Comlab B</option>
        <option>Comlab C</option>
      </select>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {computers.map(({ pc_number, status }) => (
          <div key={pc_number} className={`p-4 border rounded ${status === "available" ? "bg-green-100" : status === "not_available" ? "bg-red-100" : "bg-yellow-100"}`}>
            <h2 className="text-lg font-semibold">{pc_number}</h2>
            <p className="capitalize">{status}</p>
            {status === "available" && <button onClick={() => reservePC(pc_number)} className="p-1 bg-blue-500 text-black">Reserve</button>}
          </div>
        ))}
      </div>
    </div>
  );
}
