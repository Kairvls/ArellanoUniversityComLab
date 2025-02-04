"use client";
import { useState, useEffect } from "react";

export default function Collegelabb() {
  const [lab, setLab] = useState("Comlab A");
  const [computers, setComputers] = useState([]);
  const [pcNumber, setPcNumber] = useState("");
  const [usage, setUsage] = useState([]);

  

  useEffect(() => {
    fetch(`/api/admin/computers/${lab}`)
      .then((res) => res.json())
      .then((data) => setComputers(data));
  }, [lab]);

  useEffect(() => {
    fetch("/api/admin/computers/status")
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
      

      <h2 className="text-xl font-bold mt-6">Current Users</h2>
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Lab</th>
            <th className="p-2 border">PC</th>
            <th className="p-2 border">LRN</th>
          </tr>
        </thead>
        <tbody>
        {[...usage].reverse().map(({ lab, pc_number, lrn }) => (
            <tr key={`${pc_number}-${lrn}`}>
              <td className="p-2 border text-black">{lab}</td>
              <td className="p-2 border text-black">{pc_number}</td>
              <td className="p-2 border text-black">{lrn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
