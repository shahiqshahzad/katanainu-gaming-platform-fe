import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { MdOutlineClose, MdPermMedia } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useFormik } from "formik";
import {
  createTeamMutation,
  updateTeamMutation,
} from "../../utils/api/tournamentModule";
import { createTeamSchema } from "../../utils/validationSchemas";

const customStyles = {
  content: {
    margin: "auto",
    maxHeight: "29rem",
    maxWidth: "30rem",
    height: "auto",
    width: "auto",
    backgroundColor: "#181523",
    border: "none",
    borderRadius: "1rem",
    backgroundColor: "rgba(194, 175, 248, 0.1)",
  },
  overlay: {
    backgroundColor: "#15131DB2",
    backdropFilter: "blur(30px)",
  },
};

const CreateTeam = ({ isUpdate, team }) => {
  const [createTeam, setCreateTeam] = useState(false);
  const fileInput = useRef(null);
  const create = createTeamMutation();
  const updateTeam = updateTeamMutation();

  const formik = useFormik({
    initialValues: {
      teamName: team?.teamName || "",
      description: team?.description || "",
      region: team?.region || "",
      teamImage: null,
    },
    validationSchema: !isUpdate && createTeamSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const formData = new FormData();
      formData.append("teamName", values.teamName);
      formData.append("description", values.description);
      formData.append("region", values.region);
      formData.append("teamImage", values.teamImage);

      if (isUpdate) {
        const updatedData = {
          formData,
          teamId: team?._id,
        };
        await updateTeam.mutateAsync(updatedData);
      } else {
        await create.mutateAsync(formData);
        formik.resetForm();
      }

      closeModal();
      setSubmitting(false);
    },
  });

  function closeModal() {
    setCreateTeam(false);
  }

  return (
    <>
      {isUpdate ? (
        <button
          className="text-[#D136F6] flex items-center"
          onClick={() => setCreateTeam(true)}
        >
          <FaEdit size={25} />
        </button>
      ) : (
        <button
          className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[linear-gradient(90deg,#D136F6_0%,#6C5DD3_100%)] backdrop-blur-[8px]"
          onClick={() => setCreateTeam(true)}
        >
          Create Team
        </button>
      )}
      <Modal
        isOpen={createTeam}
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
          <div>
            <label className="text-gray-300">Enter Team Name</label>
            <input
              type="text"
              className="border border-[#393350] border-2 rounded outline-none w-full p-2 bg-[#181523] text-white mt-1"
              placeholder="Enter team name"
              value={formik.values.teamName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="teamName"
            />
          </div>
          {formik.touched.teamName && formik.errors.teamName ? (
            <div className="text-red-500">{formik.errors.teamName}</div>
          ) : null}
          <label className="text-gray-300 mt-3">Write Description</label>
          <input
            type="text"
            className="border border-[#393350] border-2 rounded outline-none w-full p-2 bg-[#181523] text-white mt-1"
            placeholder="Write team description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="description"
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500">{formik.errors.description}</div>
          ) : null}
          <label className="text-gray-300 mt-3">Enter Your Region</label>
          <input
            type="text"
            className="border border-[#393350] border-2 rounded outline-none w-full p-2 bg-[#181523] text-white mt-1"
            placeholder="Enter region"
            value={formik.values.region}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="region"
          />
          {formik.touched.region && formik.errors.region ? (
            <div className="text-red-500">{formik.errors.region}</div>
          ) : null}
          <div className="w-full flex justify-end mt-3">
            <div style={{ position: "relative", overflow: "hidden" }}>
              <button
                type="button"
                className="custom-button text-white flex items-center gap-1"
                onClick={() => fileInput.current.click()}
              >
                <MdPermMedia size={20} />
                Photo
              </button>
              <input
                type="file"
                name="file"
                onChange={(e) =>
                  formik.setFieldValue("teamImage", e.target.files[0])
                }
                className="hidden"
                ref={fileInput}
              />
            </div>
          </div>
          {formik.values.teamImage && (
            <img
              src={URL.createObjectURL(formik.values.teamImage)}
              alt="No image"
              className="mt-3"
            />
          )}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="connect-wallet px-8 py-2 rounded text-neutral-primary font-satoshi-medium font-medium leading-[156%] text-base "
              disabled={formik.isSubmitting}
            >
              {isUpdate ? "Update Team" : "Create Team"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreateTeam;
