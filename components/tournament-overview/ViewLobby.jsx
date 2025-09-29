import Modal from "react-modal";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import {
  addPlayerInLobby,
  getMatchLobby,
  removePlayerFromLobby,
} from "../../utils/api/tournamentModule";
import Image from "next/image";

const customStyles = {
  content: {
    margin: "auto",
    height: "fit-content",
    width: "fit-content",
    minWidth: "500px",
    backgroundColor: "#201F25",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgb(0, 0, 0, 0.7)",
  },
};

const ViewLobby = ({ matchId }) => {
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = getMatchLobby(matchId);
  const [isAddPlayer, setIsAddPlayer] = useState(false);
  const addPlayer = addPlayerInLobby();
  const removePlayer = removePlayerFromLobby();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("status", status);

    const lobbyData = {
      formData,
      data,
    };
    await addPlayer.mutateAsync(lobbyData);
    if (addPlayer.isSuccess) {
      setUserId("");
      setStatus("");
    }
  };

  const handleRemovePlayer = async (userId) => {
    const userData = { userId, lobbyId: data?.data?._id };
    await removePlayer.mutateAsync(userData);
  };

  return (
    <>
      <button
        className="px-5 py-3 font-bold text-white font-satoshi-bold rounded primary-gradient w-full"
        onClick={() => setIsOpen(true)}
      >
        View Lobby
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div className="flex justify-end text-white">
          <button onClick={() => setIsOpen(false)}>
            <MdOutlineClose size={25} />
          </button>
        </div>
        {isAddPlayer ? (
          <div className="flex justify-end mt-5 w-full">
            <button
              className="p-3 rounded-lg primary-gradient text-white"
              onClick={() => setIsAddPlayer(false)}
            >
              View Lobby
            </button>
          </div>
        ) : (
          <div className="flex justify-end mt-5 w-full">
            <button
              className="p-3 rounded-lg primary-gradient text-white"
              onClick={() => setIsAddPlayer(true)}
            >
              Add Player
            </button>
          </div>
        )}

        {isAddPlayer ? (
          <div className="flex flex-col justify-center items-center gap-5 mt-5">
            <select
              className="bg-[#201F25] border border-neutral-tertiary rounded text-white p-2 outline-none w-full"
              onChange={(e) => setUserId(e.target.value)}
            >
              <option value="">Select Member</option>
              {data?.data?.teamMembers?.map((teamMember, index) => (
                <option value={teamMember?._id} key={index}>
                  {teamMember?.userName}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={status}
              placeholder="Enter Status"
              onChange={(e) => setStatus(e.target.value)}
              className="border p-2 border-neutral-tertiary rounded-lg bg-transparent w-full text-white"
            />
            <button
              className="p-3 rounded-lg w-full primary-gradient text-white"
              onClick={handleSubmit}
            >
              Add To Lobby
            </button>
          </div>
        ) : data?.data?.players?.length === 0 ? (
          <p className="text-white text-center w-full mt-5">
            No players added in lobby.
          </p>
        ) : (
          data?.data?.players?.map((player, index) => (
            <div
              key={index}
              className="text-neutral-tertiary flex w-full justify-between items-center mt-5 px-5 border border-neutral-tertiary rounded-lg"
            >
              <div className="flex justify-center items-center w-fit gap-3">
                <Image
                  src={player?.userId?.image}
                  alt="Not found"
                  width={50}
                  height={50}
                />
                <p>{player?.userId?.name}</p>
              </div>
              <p>{player?.status}</p>
              <button onClick={() => handleRemovePlayer(player?.userId?._id)}>
                X
              </button>
            </div>
          ))
        )}
      </Modal>
    </>
  );
};

export default ViewLobby;
