"use client";

import CustomModal from "@/components/CustomModal";
import Image from "next/image";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("");
  const [reflection, setReflection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleReflectionChange = (e) => {
    setReflection(e.target.value);
  };

  return (
    <main className="flex flex-col flex-1 p-4 w-100">
      <section className="flex flex-col justify-center gap-8">
        <div className="flex justify-center items-center">
          <h1>Add a reflection</h1>
        </div>
        <div className="flex justify-evenly items-start">
          <div className="p-2">
            <span
              data-tooltip-id="select-level-tooltip"
              data-tooltip-content="Select the level of deep listening"
            >
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </span>
          </div>
          <textarea
            value={reflection}
            onChange={handleReflectionChange}
            className="rounded p-2 w-[50vw] h-[20vh]"
            placeholder="Enter your reflection"
          />
          <button onClick={openModal} className="p-2">
            <span
              data-tooltip-id="help-tooltip"
              data-tooltip-content="Click for more info"
            >
              <Image
                src={"/infoIcon.svg"}
                width={25}
                height={25}
                alt={"Info Icon"}
              />
            </span>
          </button>
        </div>
        <button>Add Reflection</button>

        <CustomModal
          isOpen={isOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
        />
      </section>
      <section></section>
      <Tooltip id="help-tooltip" />
      <Tooltip id="select-level-tooltip" />
    </main>
  );
}
