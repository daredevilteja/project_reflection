"use client";

import CustomModal from "@/components/CustomModal";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";

export default function HomeComponent({ createReflection, data }) {
  const [selectedOption, setSelectedOption] = useState("1");
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
    <main className="flex flex-col flex-1 gap-4 p-4 w-100 bg-gray-200">
      <motion.section
        className="flex flex-col justify-center gap-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center items-center text-3xl text-blue-600">
          Add a reflection
        </div>
        <div className="flex justify-evenly items-start">
          <div className="p-2">
            <span
              data-tooltip-id="select-level-tooltip"
              data-tooltip-content="Select the level of deep listening"
            >
              <motion.select
                value={selectedOption}
                onChange={handleOptionChange}
                className="bg-yellow-200 rounded p-2 whimsical-select"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </motion.select>
            </span>
          </div>
          <motion.textarea
            value={reflection}
            onChange={handleReflectionChange}
            className="rounded p-2 w-[50vw] h-[20vh] border-2 border-green-500 whimsical-textarea"
            placeholder="Enter your reflection"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.button
            onClick={openModal}
            className="p-2 rounded hover:bg-purple-600 whimsical-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
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
          </motion.button>
        </div>
        <div className="flex justify-center">
          <motion.button
            className={
              "p-2 rounded border border-black/50 bg-white hover:ring-2 hover:ring-blue-500/50 hover:bg-indigo-600 hover:border-transparent hover:text-white/95 shadow-md transform hover:scale-105"
            }
            onClick={async () => {
              await addReflection();
              setReflection("");
              setSelectedOption("1");
            }}
          >
            Add
          </motion.button>
        </div>
        <CustomModal
          isOpen={isOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
        />
      </motion.section>
      <motion.section
        className="flex flex-col gap-6 p-2 h-[40vh] w-[80vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-3xl text-blue-600 text-center">
          Previous Reflections
        </div>
        <div className="flex flex-col h-[40vh] overflow-y-auto gap-6">
          {cardData.map((val, idx) => (
            <div
              key={idx}
              className="flex flex-row justify-between items-center px-6 py-2 border border-black/40 rounded bg-white shadow-lg"
            >
              <div className="flex flex-col justify-center items-center">
                <span className="truncate max-w-[10rem]">
                  {val.reflectionLevel}
                </span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="truncate max-w-[10rem]">{val.reflection}</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="truncate max-w-[10rem]">{val.date}</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="truncate max-w-[10rem]">{val.time}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      <Tooltip id="help-tooltip" />
      <Tooltip id="select-level-tooltip" />
    </main>
  );
}
