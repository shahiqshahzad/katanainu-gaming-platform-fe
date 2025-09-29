import React, { useEffect } from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import { useFormik } from "formik";
import { updateProfileMutation } from "../../utils/api/userModule";

const customStyles = {
  content: {
    margin: "auto",
    maxHeight: "31rem",
    maxWidth: "40rem",
    height: "auto",
    width: "auto",
    backgroundColor: "#181523",
    border: "none",
    borderRadius: "1rem",
    backgroundColor: "rgba(194, 175, 248, 0.1)",
  },
  overlay: {
    backgroundColor: "#15131DB2", // hex with 70% opacity
    backdropFilter: "blur(30px)",
  },
};

const UpdateProfile = ({ user, setIsOpen, isUpdateProfile }) => {
  const updateProfile = updateProfileMutation();
  const isMobile = window.innerWidth <= 768;
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      name: "",
      age: "",
      city: "",
      country: "",
      youtubeStreamLink: "",
      twitchStreamLink: "",
    },
    onSubmit: async (values, { setSubmitting, setFieldError, resetForm }) => {
      const formData = new FormData();
      formData.append("userName", values.userName);
      formData.append("email", values.email);
      formData.append("name", values.name);
      formData.append("age", values.age);
      formData.append("city", values.city);
      formData.append("country", values.country);
      formData.append("youtubeStreamLink", values.youtubeStreamLink);
      formData.append("twitchStreamLink", values.twitchStreamLink);
      try {
        await updateProfile.mutateAsync(formData);
        setSubmitting(false);
        setIsOpen(false);
        resetForm();
      } catch (error) {
        setSubmitting(false);
        setFieldError("form", error.message);
      }
    },
  });
  useEffect(() => {
    if (user) {
      formik.setValues({
        userName: user.userName || "",
        email: user.email || "",
        name: user.name || "",
        age: user.age || "",
        city: user.city || "",
        country: user.country || "",
        youtubeStreamLink: user?.youtubeStreamLink || "",
        twitchStreamLink: user?.twitchStreamLink || "",
      });
    }
  }, [user]);

  return (
    <Modal
      isOpen={isUpdateProfile}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="Update Profile"
    >
      <div className="flex justify-end text-white">
        <button onClick={() => setIsOpen(false)}>
          <MdOutlineClose size={25} />
        </button>
      </div>
      <form
        className="grid grid-cols-2  content-center gap-4"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label className="text-gray-300">Username</label>
          <input
            type="text"
            className="border border-[#393350] border-2 rounded outline-none w-full p-2 bg-[#181523] text-white mt-1"
            placeholder="Enter username"
            {...formik.getFieldProps("userName")}
          />
        </div>
        <div>
          <label className="text-gray-300 ">Email</label>
          <input
            type="email"
            className="border border-[#393350] border-2  rounded outline-none w-full p-2 bg-[#181523] text-white mt-1"
            placeholder="Enter your email"
            {...formik.getFieldProps("email")}
          />
        </div>
        <div>
          <label className="text-gray-300">Name</label>
          <input
            type="text"
            className="border border-[#393350] border-2 rounded outline-none w-full p-2 bg-[#181523] text-white mt-1"
            placeholder="Enter your name"
            {...formik.getFieldProps("name")}
          />
        </div>
        <div>
          <label className="text-gray-300">Age</label>
          <input
            type="number"
            className="border border-[#393350] border-2 rounded outline-none w-full p-2 bg-[#181523] text-white  mt-1"
            placeholder="Enter your age"
            {...formik.getFieldProps("age")}
          />
        </div>
        <div>
          <label className="text-gray-300">City</label>
          <input
            type="text"
            className="border border-[#393350] border-2 rounded outline-none w-full p-2 bg-[#181523] text-white mt-1"
            placeholder="Enter your city"
            {...formik.getFieldProps("city")}
          />
        </div>
        <div>
          <label className="text-gray-300">Country</label>
          <input
            type="text"
            className="border border-[#393350] border-2 rounded outline-none w-full p-2 bg-[#181523] text-white mt-1"
            placeholder="Enter your country"
            {...formik.getFieldProps("country")}
          />
        </div>
        <div>
          <label className="text-gray-300">Youtube Profile Link</label>
          <input
            type="text"
            className="border border-[#393350] border-2 rounded outline-none w-full p-2 bg-[#181523] text-white mt-1"
            placeholder="Paste your youtube profile link here"
            {...formik.getFieldProps("youtubeStreamLink")}
          />
        </div>
        <div>
          <label className="text-gray-300">Twitch Profile Link</label>
          <input
            type="text"
            className="border border-[#393350] border-2 rounded outline-none w-full p-2 bg-[#181523] text-white mt-1"
            placeholder="Paste your twitch profile link here"
            {...formik.getFieldProps("twitchStreamLink")}
          />
        </div>
        <div className="col-span-2 flex justify-center mt-2">
          <button
            type="submit"
            className="connect-wallet px-8 py-2 rounded text-neutral-primary font-satoshi-medium font-medium leading-[156%] text-base "
            disabled={formik.isSubmitting}
          >
            Update Profile
          </button>
        </div>
        {formik.errors.form ? (
          <div className="text-red-500 mt-2">{formik.errors.form}</div>
        ) : null}
      </form>
    </Modal>
  );
};

export default UpdateProfile;
