import React, { useState } from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import { useFormik } from "formik";
import {
  createMatchMutation,
  updateMatchMutation,
} from "../../utils/api/tournamentModule";
import { createMatchSchema } from "../../utils/validationSchemas";

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

const CreateMatch = ({ tournament, update, match }) => {
  const [modalCreateMatch, setModalCreateMatch] = useState(false);

  function closeModal() {
    setModalCreateMatch(false);
  }

  const createMatch = createMatchMutation();
  const updateMatch = updateMatchMutation();

  const formik = useFormik({
    initialValues: {
      round: match?.round || "",
      roundType: match?.roundType || "",
      startTime: match?.startTime || "",
      endTime: match?.endTime || "",
      teamA: match?.teamA?._id || "",
      teamB: match?.teamB?._id || "",
      status: match?.status || "",
      winner: match?.winner || "",
    },
    validationSchema: !update && createMatchSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("tournamentId", tournament?._id || null);
      formData.append("round", values.round);
      formData.append("roundType", values.roundType);
      formData.append("startTime", values.startTime);
      formData.append("endTime", values.endTime);
      formData.append("teamA", values.teamA);
      formData.append("teamB", values.teamB);
      formData.append("status", values.status);
      if (update) {
        formData.append("winner", values.winner);
      }
      if (update) {
        const updatedData = {
          formData,
          matchId: match?._id,
        };
        await updateMatch.mutateAsync(updatedData);
      } else {
        await createMatch.mutateAsync(formData);
      }
      closeModal();
    },
  });

  return (
    <>
      <button
        className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[linear-gradient(90deg,#D136F6_0%,#6C5DD3_100%)] backdrop-blur-[8px]"
        onClick={() => setModalCreateMatch(true)}
      >
        {update ? `Update match` : `Create Match`}
      </button>
      <Modal
        isOpen={modalCreateMatch}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex justify-end text-white">
          <button onClick={closeModal}>
            <MdOutlineClose size={25} />
          </button>
        </div>
        <form
          className="w-full mt-5 flex flex-col"
          onSubmit={formik.handleSubmit}
        >
          <label className="text-white">Tournament Name</label>
          <input
            type="text"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            value={tournament?.name}
            disabled
          />
          <label className="text-white mt-3">Round</label>
          <input
            type="number"
            placeholder="Enter round number"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            value={formik.values.round}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="round"
          />
          {formik.touched.round && formik.errors.round ? (
            <div className="text-red-500">{formik.errors.round}</div>
          ) : null}
          <label className="text-white mt-3">Round Type</label>
          <input
            type="text"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Enter round type"
            value={formik.values.roundType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="roundType"
          />
          {formik.touched.roundType && formik.errors.roundType ? (
            <div className="text-red-500">{formik.errors.roundType}</div>
          ) : null}
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <label className="text-white mt-3">Start Time</label>
              <br />
              <input
                type="datetime-local"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-[#201F25] border border-neutral-tertiary rounded text-white p-2 outline-none"
                name="startTime"
              />
              {formik.touched.startTime && formik.errors.startTime ? (
                <div className="text-red-500">{formik.errors.startTime}</div>
              ) : null}
            </div>
            <div>
              <label className="text-white mt-3">End Time</label>
              <br />
              <input
                type="datetime-local"
                min={formik.values.startTime}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-[#201F25] border border-neutral-tertiary rounded text-white p-2 outline-none"
                name="endTime"
              />
              {formik.touched.endTime && formik.errors.endTime ? (
                <div className="text-red-500">{formik.errors.endTime}</div>
              ) : null}
            </div>
          </div>
          <label className="text-white mt-3">Select Team A</label>
          <select
            name="teamA"
            className="bg-[#201F25] border border-neutral-tertiary rounded text-white p-2 outline-none"
            value={formik.values.teamA}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Team</option>
            {tournament?.teams?.map((team, index) => (
              <option value={team?._id} key={index}>
                {team?.teamName}
              </option>
            ))}
          </select>
          {formik.touched.teamA && formik.errors.teamA ? (
            <div className="text-red-500">{formik.errors.teamA}</div>
          ) : null}
          <label className="text-white mt-3">Select Team B</label>
          <select
            name="teamB"
            className="bg-[#201F25] border border-neutral-tertiary rounded text-white p-2 outline-none"
            value={formik.values.teamB}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Team</option>
            {tournament?.teams?.map((team, index) => (
              <option value={team?._id} key={index}>
                {team?.teamName}
              </option>
            ))}
          </select>
          {formik.touched.teamB && formik.errors.teamB ? (
            <div className="text-red-500">{formik.errors.teamB}</div>
          ) : null}
          <label className="text-white mt-3">Status</label>
          <select
            name="status"
            className="bg-[#201F25] border border-neutral-tertiary rounded text-white p-2 outline-none"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Match Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          {formik.touched.status && formik.errors.status ? (
            <div className="text-red-500">{formik.errors.status}</div>
          ) : null}
          {update && (
            <>
              <label className="text-white mt-3">Winner</label>
              <select
                name="winner"
                className="bg-[#201F25] border border-neutral-tertiary rounded text-white p-2 outline-none"
                value={formik.values.winner}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Winner</option>

                <option value={match?.teamA?._id}>
                  {match?.teamA?.teamName}
                </option>
                <option value={match?.teamB?._id}>
                  {match?.teamB?.teamName}
                </option>
              </select>
            </>
          )}

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-slate-700 text-white px-4 py-2 rounded"
              disabled={formik.isSubmitting}
            >
              {update ? `Update Match` : `Create Match`}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreateMatch;
