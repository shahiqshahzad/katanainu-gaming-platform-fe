import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { MdOutlineClose, MdPermMedia } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addGameMutation } from "../../../utils/api/gamesModule";
import { addGamesSchema } from "../../../utils/validationSchemas";
import { ButtonLoader } from "../../common/Icons";

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

const AddGame = () => {
  const [modalCreatePost, setModalCreatePost] = useState(false);
  const fileInput = useRef(null);
  const createGame = addGameMutation();

  const formik = useFormik({
    initialValues: {
      gameName: "",
      gameYear: "",
      file: null,
    },
    validationSchema: addGamesSchema,
    onSubmit: async (values, { setSubmitting, setFieldError, resetForm }) => {
      const formData = new FormData();
      formData.append("gameName", values.gameName);
      formData.append("year", values.gameYear);
      if (values.file) {
        formData.append("gameImage", values.file);
      }
      try {
        await createGame.mutateAsync(formData);
        setSubmitting(false);
        setModalCreatePost(false);
        resetForm();
      } catch (error) {
        setSubmitting(false);
        setFieldError("form", error.message);
      }
    },
  });

  return (
    <>
      <button
        className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[linear-gradient(90deg,#D136F6_0%,#6C5DD3_100%)] backdrop-blur-[8px]"
        onClick={() => setModalCreatePost(true)}
      >
        Add Game
      </button>
      <Modal
        isOpen={modalCreatePost}
        onRequestClose={() => setModalCreatePost(false)}
        style={customStyles}
      >
        <div className="flex justify-end text-white">
          <button onClick={() => setModalCreatePost(false)}>
            <MdOutlineClose size={25} />
          </button>
        </div>
        <form
          className="w-full mt-5 flex flex-col"
          onSubmit={formik.handleSubmit}
        >
          <label className="text-white">Enter Game Name</label>
          <input
            type="text"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Enter game name"
            {...formik.getFieldProps("gameName")}
          />
          {formik.touched.gameName && formik.errors.gameName ? (
            <div className="text-red-500">{formik.errors.gameName}</div>
          ) : null}
          <label className="text-white mt-3">Enter Year</label>
          <input
            type="number"
            className="border border-neutral-tertiary rounded outline-none w-full p-2 bg-[#201F25] text-white"
            placeholder="Enter year"
            {...formik.getFieldProps("gameYear")}
          />
          {formik.touched.gameYear && formik.errors.gameYear ? (
            <div className="text-red-500">{formik.errors.gameYear}</div>
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
                  formik.setFieldValue("file", e.target.files[0])
                }
                className="hidden"
                ref={fileInput}
              />
            </div>
          </div>
          {formik.values.file && (
            <img
              src={URL.createObjectURL(formik.values.file)}
              alt="No image"
              className="mt-3"
            />
          )}
          {formik.touched.file && formik.errors.file ? (
            <div className="text-red-500 text-right">{formik.errors.file}</div>
          ) : null}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-slate-700 text-white px-4 py-2 rounded w-28"
              disabled={formik.isSubmitting}
            >
              {createGame?.isPending ? (
                <div className="flex justify-center">
                  <ButtonLoader />
                </div>
              ) : (
                "Add Game"
              )}
            </button>
          </div>
          {formik.errors.form ? (
            <div className="text-red-500 mt-2">{formik.errors.form}</div>
          ) : null}
        </form>
      </Modal>
    </>
  );
};

export default AddGame;
