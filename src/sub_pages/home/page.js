"use client";
import { useState } from "react";

export default function AddPC() {
  const [lab, setLab] = useState("Comlab A");
  const [pcNumber, setPcNumber] = useState("");

  const addPC = async () => {
    if (!pcNumber) return alert("Enter a PC Number!");

    await fetch("/api/admin/computers/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lab, pc_number: pcNumber }),
    });

    alert("PC Added.");
    setPcNumber("");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Add a New PC</h1>
      <div className="flex">
      <select className="p-2 border mt-2" onChange={(e) => setLab(e.target.value)}>
        <option value="Comlab A">Collge Lab A</option>
        <option value="Comlab B">Collge Lab B</option>
        <option value="Comlab C">ICT Lab</option>
      </select>
      <input type="text" placeholder="PC Number (e.g., PC4)" className="p-2 border mt-2" onChange={(e) => setPcNumber(e.target.value)} />
      
<button onClick={addPC} className="w-18 items-center flex justify-center h-10 mt-2 btn-cssbuttons">
<span>Add PC</span><span>
  <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className="icon">
    <path fill="#ffffff" d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"></path>
  </svg>
</span>
<ul>
<li>
  <p>ADD</p></li></ul></button>
      </div>
    </div>
  );
}
