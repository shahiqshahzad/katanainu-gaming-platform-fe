import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { MdOutlineClose, MdPermMedia } from "react-icons/md";
import { useFormik } from "formik";
import { useGames } from "../../../store/store";
import {
  createTournamentMutation,
  updateTournamentMutation,
} from "../../../utils/api/tournamentModule";
import { FaRegEdit } from "react-icons/fa";
import { createTournamentSchema } from "../../../utils/validationSchemas";
import { addDays, format, parseISO } from "date-fns";
import axios from "../../../utils/api/interceptor";
import { useQuery } from "@tanstack/react-query";
import API_END_POINTS from "../../../utils/api/api_endpoints";
import { ButtonLoader } from "../../common/Icons";

const customStyles = {
  content: {
    margin: "auto",
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

const CreateTournament = ({ isEdit, tournament }) => {
  const fileInput = useRef(null);
  const [today, setToday] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [image, setImage] = useState(
    tournament?.tournamentImage ? tournament?.tournamentImage : ""
  );
  const { isLoading, data: games } = useQuery({
    queryKey: ["gamesWithoutPagination"],
    queryFn: () => axios.get(`${API_END_POINTS.GET_ALL_GAMES}`),
    refetchOnWindowFocus: false,
  });
  const closeModal = () => {
    setModalIsOpen(false);
  };
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setToday(formattedDate);
  }, []);

  const createTournament = createTournamentMutation();
  const updateTournament = updateTournamentMutation();

  const formik = useFormik({
    initialValues: {
      name: tournament?.name || "",
      description: tournament?.description || "",
      rounds: tournament?.rounds || "",
      prize: tournament?.prize || "",
      gameId: tournament?.gameId || "",
      rules: tournament?.rules || "",
      maxTeams: tournament?.maxTeams || "",
      minTeamSize: tournament?.minTeamSize || "",
      status: tournament?.status || "",
      startDate: tournament?.startDate
        ? format(parseISO(tournament?.startDate), "yyyy-MM-dd'T'HH:mm")
        : "" || "",
      endDate: tournament?.endDate
        ? format(parseISO(tournament?.endDate), "yyyy-MM-dd'T'HH:mm")
        : "" || "",
      endDate: tournament?.endDate
        ? format(parseISO(tournament?.endDate), "yyyy-MM-dd'T'HH:mm")
        : "" || "",
      enrollmentStartDate: tournament?.enrollmentStartDate
        ? format(
            addDays(parseISO(tournament?.enrollmentStartDate), 1),
            "yyyy-MM-dd"
          )
        : "" || "",
      enrollmentEndDate: tournament?.enrollmentEndDate
        ? format(
            addDays(parseISO(tournament?.enrollmentEndDate), 1),
            "yyyy-MM-dd"
          )
        : "" || "",
      file: null,
    },
    validationSchema: !isEdit && createTournamentSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key === "file") {
          formData.append("tournamentImage", value);
        } else {
          formData.append(key, value);
        }
      });
      if (isEdit) {
        const updatedData = {
          formData,
          tournamentId: tournament?._id,
        };
        await updateTournament.mutateAsync(updatedData);
        closeModal();
      } else {
        await createTournament.mutateAsync(formData);
        formik.resetForm();
        closeModal();
      }
      setSubmitting(false);
    },
  });

  return (
    <>
      {isEdit ? (
        <button onClick={() => setModalIsOpen(true)}>
          <FaRegEdit size={20} />
        </button>
      ) : (
        <button
          className="text-[14px] hover:scale-90 transition duration-300 ease-in-out p-3 font-bold leading-5 text-white font-satoshi-bold rounded-[4px] primary-gradient backdrop-blur-[8px]"
          onClick={() => setModalIsOpen(true)}
        >
          Create Tournament
        </button>
      )}
      <Modal
        isOpen={modalIsOpen}
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
          <label className="text-white">Enter Tournament Name</label>
          <input
            type="text"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Enter tournament name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}

          <label className="text-white mt-2">
            Enter Tournament Description
          </label>
          <input
            type="text"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Enter tournament description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="description"
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500">{formik.errors.description}</div>
          ) : null}

          <label className="text-white mt-2">Enter Rounds</label>
          <input
            type="number"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Enter tournament rounds"
            value={formik.values.rounds}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="rounds"
          />
          {formik.touched.rounds && formik.errors.rounds ? (
            <div className="text-red-500">{formik.errors.rounds}</div>
          ) : null}

          <label className="text-white mt-2">Enter prize</label>
          <input
            type="number"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Enter prize of tournament"
            value={formik.values.prize}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="prize"
          />
          {formik.touched.prize && formik.errors.prize ? (
            <div className="text-red-500">{formik.errors.prize}</div>
          ) : null}

          <select
            name="gameId"
            id="gameId"
            value={formik.values.gameId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="bg-[#201F25] border border-neutral-tertiary rounded text-white p-2 outline-none mt-4"
          >
            <option value="">Select Game</option>
            {games?.data?.data?.documents?.map((game, index) => (
              <option key={index} value={game?._id}>
                {game?.gameName}
              </option>
            ))}
          </select>
          {formik.touched.gameId && formik.errors.gameId ? (
            <div className="text-red-500">{formik.errors.gameId}</div>
          ) : null}

          <label className="text-white mt-2">Write Tournament Rules</label>
          <input
            type="text"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Write rules for tournament"
            value={formik.values.rules}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="rules"
          />
          {formik.touched.rules && formik.errors.rules ? (
            <div className="text-red-500">{formik.errors.rules}</div>
          ) : null}

          <label className="text-white mt-2">Max Teams</label>
          <input
            type="text"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Enter maximum teams for the tournament"
            value={formik.values.maxTeams}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="maxTeams"
          />
          {formik.touched.maxTeams && formik.errors.maxTeams ? (
            <div className="text-red-500">{formik.errors.maxTeams}</div>
          ) : null}
          <label className="text-white mt-2">Min Team size</label>
          <input
            type="text"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Enter team size"
            value={formik.values.minTeamSize}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="minTeamSize"
          />
          {formik.touched.minTeamSize && formik.errors.minTeamSize ? (
            <div className="text-red-500">{formik.errors.minTeamSize}</div>
          ) : null}

          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label className="text-white mt-3">Enrollment Start Date</label>
              <br />
              <input
                type="date"
                id="enrollmentStartDate"
                name="enrollmentStartDate"
                value={formik.values.enrollmentStartDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                min={!isEdit && today}
                className="w-full bg-[#201F25] border border-neutral-tertiary rounded text-white p-2 outline-none"
              />
              {formik.touched.enrollmentStartDate &&
              formik.errors.enrollmentStartDate ? (
                <div className="text-red-500">
                  {formik.errors.enrollmentStartDate}
                </div>
              ) : null}
            </div>
            <div>
              <label className="text-white mt-3">Enrollment End Date</label>
              <br />
              <input
                type="date"
                id="enrollmentEndDate"
                name="enrollmentEndDate"
                value={formik.values.enrollmentEndDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                min={formik.values.enrollmentStartDate}
                className="w-full bg-[#201F25] border border-neutral-tertiary rounded text-white p-2 outline-none"
              />
              {formik.touched.enrollmentEndDate &&
              formik.errors.enrollmentEndDate ? (
                <div className="text-red-500">
                  {formik.errors.enrollmentEndDate}
                </div>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label className="text-white mt-2">Tournament Start Date</label>
              <input
                type="datetime-local"
                id="startDate"
                name="startDate"
                value={formik.values.startDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                min={formik.values.enrollmentEndDate}
                className="w-full bg-[#201F25] border border-neutral-tertiary rounded text-white p-2 outline-none"
              />
              {formik.touched.startDate && formik.errors.startDate ? (
                <div className="text-red-500">{formik.errors.startDate}</div>
              ) : null}
            </div>

            <div>
              <label className="text-white mt-2">Tournament End Date</label>
              <input
                type="datetime-local"
                id="endDate"
                name="endDate"
                value={formik.values.endDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                min={formik.values.startDate}
                className="w-full bg-[#201F25] border border-neutral-tertiary rounded text-white p-2 outline-none"
              />
              {formik.touched.endDate && formik.errors.endDate ? (
                <div className="text-red-500">{formik.errors.endDate}</div>
              ) : null}
            </div>
          </div>
          <label className="text-white mt-2">Tournament Status</label>
          <input
            type="text"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="pending or completed"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="status"
          />
          {formik.touched.status && formik.errors.status ? (
            <div className="text-red-500">{formik.errors.status}</div>
          ) : null}

          <div className="w-full flex justify-end mt-2">
            <div style={{ position: "relative", overflow: "hidden" }}>
              <button
                type="button"
                className="custom-button text-white flex items-center gap-1"
                onClick={() => fileInput.current.click()}
              >
                <MdPermMedia size={20} />
                Upload Image
              </button>
              <input
                type="file"
                name="file"
                onChange={(e) =>
                  formik.setFieldValue("file", e.target.files[0])
                }
                className="hidden"
                ref={fileInput}
              />
            </div>
          </div>
          {formik.errors.file && formik.touched.file ? (
            <div className="text-red-500 text-right">{formik.errors.file}</div>
          ) : null}
          {formik.values.file && (
            <>
              {formik.values.file && (
                <img
                  src={URL.createObjectURL(formik.values.file)}
                  alt="No image"
                  className="mt-2"
                />
              )}
            </>
          )}

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-slate-700 text-white px-4 py-2 rounded w-44"
              disabled={formik.isSubmitting}
            >
              {createTournament.isPending || updateTournament.isPending ? (
                <div className="flex justify-center">
                  <ButtonLoader />
                </div>
              ) : (
                <>{isEdit ? "Update" : "Create Tournament"}</>
              )}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreateTournament;
