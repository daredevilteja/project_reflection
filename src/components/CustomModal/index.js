import Modal from "react-modal";
import Image from "next/image";
import { motion } from "framer-motion";

const customStyles = {
  content: {
    top: "20%",
    left: "20%",
    right: "20%",
    bottom: "20%",
    borderRadius: "1rem",
  },
};

export default function CustomModal({ isOpen, afterOpenModal, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Info Modal"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="p-4 "
      >
        <div className="flex justify-between items-center">
          <motion.h2
            initial={{ fontSize: 20 }}
            animate={{ fontSize: 40, color: "blue" }}
            className="font-semibold"
          >
            Information
          </motion.h2>
          <button onClick={closeModal}>
            <Image
              src={"/closeIcon.svg"}
              width={25}
              height={25}
              alt={"close Icon"}
            />
          </button>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              Level 1: While listening if we relate the content to ourself and
              think about ourself
            </div>
            <div>
              Level 2: Wile listening we are so much focused towards the speaker
              and listen everyword
            </div>
            <div>
              Level 3: While listening we listen not only to the speaker but
              also pay attention to our surroundings
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Modal>
  );
}
