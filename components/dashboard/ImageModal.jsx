import React from "react";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import Modal from "react-modal";
const customStyles = {
  content: {
    margin: "auto",
    height: "fit-content",
    width: "fit-content",
    backgroundColor: "transparent",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
  },
  overlay: {
    backgroundColor: "rgb(0, 0, 0, 0.7)",
  },
};

const ImageModal = ({ isImage, closeModal, imageUrl }) => {
  const handleDownload = () => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.jpg");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((err) => console.error("Failed to download image", err));
  };
  return (
    <Modal isOpen={isImage} onRequestClose={closeModal} style={customStyles}>
      <div className="relative">
        <div className="flex justify-end absolute right-5 top-5 gap-5 text-white mb-5">
          <button
            onClick={handleDownload}
            className="primary-gradient p-2 rounded-md"
          >
            <IoMdDownload size={25} />
          </button>
          <button onClick={closeModal}>
            <MdOutlineClose size={25} />
          </button>
        </div>
        <img src={imageUrl} alt="Download Image" className="h-[80vh]" />
      </div>
    </Modal>
  );
};

export default ImageModal;
