"use client";

import CustomModal from "@/components/CustomModal";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

export default function HomeComponent({ createReflection, data }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [reflection, setReflection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    data().then((res) => setCardData([...res]));
  }, [setCardData, data, cardData]);
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

  const addReflection = async () => {
    const currDate = new Date();
    const month = currDate.getMonth();
    const day = currDate.getDate();
    const year = currDate.getFullYear();
    const time = currDate.toLocaleTimeString();

    try {
      createReflection({
        reflectionLevel: Number(selectedOption),
        reflection: reflection,
        date: `${day}-${month}-${year}`,
        time: time,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="flex flex-col flex-1 p-4 w-100">
      <section className="flex flex-col justify-center gap-8">
        <div className="flex justify-center items-center">
          <div className="text-4xl">Add a reflection</div>
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
        <div className="flex justify-center">
          <button
            className={
              "p-2 rounded border border-black/50 bg-white hover:ring-2 hover:ring-blue-500/50 hover:bg-indigo-600 hover:border-transparent hover:text-white/95"
            }
            onClick={async () => {
              await addReflection();
              setReflection("");
            }}
          >
            Add
          </button>
        </div>
        <CustomModal
          isOpen={isOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
        />
      </section>
      <section className="flex flex-col gap-8 p-2 ">
        <div>Previous Reflections</div>
        {cardData.map((val, idx) => (
          <div key={idx}>{val.reflection}</div>
        ))}
      </section>
      <Tooltip id="help-tooltip" />
      <Tooltip id="select-level-tooltip" />
    </main>
  );
}
