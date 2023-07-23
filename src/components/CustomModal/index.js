import Modal from "react-modal";
import Image from "next/image";

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
      <div className="p-4 ">
        <div className="flex justify-between items-center">
          <h2>Information</h2>
          <button onClick={closeModal}>
            <Image
              src={"/closeIcon.svg"}
              width={25}
              height={25}
              alt={"close Icon"}
            />
          </button>
        </div>

        <div>I am a modal</div>
      </div>
    </Modal>
  );
}
