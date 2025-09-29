import Modal from "react-modal";
import { useFormik } from "formik";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { createLobby } from "../../utils/api/tournamentModule";

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

const CreateLobby = ({ matchId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lobby = createLobby();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("userName", values.userName);
      formData.append("password", values.password);
      const data = { formData, matchId };
      await lobby.mutateAsync(data);
      setIsOpen(false);
    },
  });

  return (
    <>
      <button
        className="px-5 py-3 font-bold text-white font-satoshi-bold rounded primary-gradient w-full whitespace-nowrap"
        onClick={() => setIsOpen(true)}
      >
        Create Lobby
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
        <form
          className="w-full mt-5 flex flex-col"
          onSubmit={formik.handleSubmit}
        >
          <label className="text-white mt-3">userName</label>
          <input
            type="text"
            placeholder="Enter userName"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="userName"
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className="text-red-500">{formik.errors.userName}</div>
          ) : null}
          <label className="text-white mt-3">Password</label>
          <input
            type="text"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-slate-700 text-white px-4 py-2 rounded"
              disabled={formik.isSubmitting}
            >
              Create Lobby
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreateLobby;
