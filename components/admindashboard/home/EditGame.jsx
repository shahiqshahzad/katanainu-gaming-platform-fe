import { useEffect, useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineClose, MdPermMedia } from "react-icons/md";
import Modal from "react-modal";
import { updateGame } from "../../../utils/api/gamesModule";

const customStyles = {
  content: {
    margin: "auto",
    maxHeight: "30rem",
    maxWidth: "30rem",
    height: "auto",
    width: "auto",
    backgroundColor: "#201F25",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgb(0, 0, 0, 0.7)",
  },
};

export default function EditGame({ content, findPage }) {
  const fileInput = useRef(null);
  const [editPost, setEditPost] = useState(false);
  const [gameName, setGameName] = useState("");
  const [gameYear, setGameYear] = useState("");
  const [gameImage, setGameImage] = useState(null);

  useEffect(() => {
    if (editPost) {
      setGameName(content?.gameName || "");
      setGameYear(content?.year || "");
      setGameImage(null);
    }
  }, [editPost, content]);
  function closeModal() {
    setEditPost(false);
  }
  const getImageSrc = () => {
    if (gameImage instanceof File) {
      return URL.createObjectURL(gameImage);
    }
    return gameImage;
  };

  const updateGameMutation = updateGame();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("gameName", gameName);
    formData.append("year", gameYear);
    if (gameImage) {
      formData.append("gameImage", gameImage);
    }
    const updatedData = {
      formData,
      gameId: content?._id,
    };
    await updateGameMutation.mutateAsync(updatedData);
    setGameName("");
    setGameYear("");
    setGameImage(null);
    findPage(content?._id);
    closeModal();
  };

  return (
    <>
      <button className="text-[#838091]" onClick={() => setEditPost(true)}>
        <FaRegEdit size={20} />
      </button>
      <Modal isOpen={editPost} onRequestClose={closeModal} style={customStyles}>
        <div className="flex justify-end text-white">
          <button onClick={closeModal}>
            <MdOutlineClose size={25} />
          </button>
        </div>

        <form className="w-full mt-5 flex flex-col">
          <label className="text-white">Enter Game Name</label>
          <input
            type="text"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Enter game name"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          />
          <label className="text-white mt-3">Enter Year</label>
          <input
            type="number"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Enter year"
            value={gameYear}
            onChange={(e) => setGameYear(e.target.value)}
          />
          {gameImage ? (
            <img src={getImageSrc()} alt="No image" className="mt-3" />
          ) : (
            <img src={content?.gameImage} alt="No image" className="mt-3" />
          )}

          <div className="w-full flex justify-end mt-3">
            <div style={{ position: "relative", overflow: "hidden" }}>
              <button
                type="button"
                className="custom-button text-white flex items-center gap-1"
                onClick={() => fileInput.current.click()}
              >
                <MdPermMedia size={20} />
                Edit Photo
              </button>
              <input
                type="file"
                name="file"
                onChange={(e) => setGameImage(e.target.files[0])}
                className="hidden"
                ref={fileInput}
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-slate-700 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
