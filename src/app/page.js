"use client";

import { useState } from "react";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <main>
      <h1>Add a reflection</h1>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <button>Add Reflection</button>
    </main>
  );
}
