import React, { useEffect, useRef } from "react";
import Modal from "react-modal";
import { MdOutlineClose, MdPermMedia } from "react-icons/md";
import { Formik, Form, Field } from "formik";
import { usePostMutation } from "../../utils/api/postModule";
import { useQueryClient } from "@tanstack/react-query";

const customStyles = {
  content: {
    margin: "auto",
    maxHeight: "20rem",
    maxWidth: "50rem",
    height: "auto",
    width: "auto",
    backgroundColor: "#201F25",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgb(0, 0, 0, 0.7)",
  },
};

const ModalCreatePost = ({ modalCreatePost, closeModal, post, hasNoFile }) => {
  const fileInput = useRef(null);
  const postMutation = usePostMutation();
  const queryClient = useQueryClient();

  const handleSubmit = async (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append("file", values.file);
    formData.append("content", values.content);
    {
      post && formData.append("sharedPostId", post?._id);
    }
    await postMutation.mutateAsync(formData);
    setSubmitting(false);
  };

  {
    postMutation.isLoading && <div>Loading...</div>;
  }
  useEffect(() => {
    if (postMutation?.isSuccess) {
      closeModal();
      queryClient.invalidateQueries({ queryKey: ["userPosts"] });
    }
  }, [postMutation.isSuccess]);

  return (
    <>
      <Modal
        isOpen={modalCreatePost}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex justify-end text-white">
          <button onClick={closeModal}>
            <MdOutlineClose size={25} />
          </button>
        </div>
        <Formik
          initialValues={{
            file: null,
            content: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => {
            return (
              <Form className="w-full">
                <Field
                  as="textarea"
                  name="content"
                  placeholder="Write description"
                  className="border border-neutral-tertiary rounded outline-none w-full h-32 p-2 mt-3 bg-[#201F25] text-white"
                />
                {!hasNoFile && (
                  <div className="w-full flex justify-end">
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <button
                        type="button"
                        className="custom-button text-white flex items-center gap-1"
                        onClick={() => fileInput.current.click()}
                      >
                        <MdPermMedia size={20} />
                        Photo/Video
                      </button>
                      <input
                        type="file"
                        name="file"
                        className="hidden"
                        ref={fileInput} // Create a reference to the file input
                        onChange={(event) => {
                          setFieldValue("file", event.target.files[0]);
                        }}
                      />
                    </div>
                  </div>
                )}
                {values.file && (
                  <img
                    src={URL.createObjectURL(values.file)}
                    alt="No image"
                    className="mt-3"
                  />
                )}
                <div className="flex justify-center w-full">
                  <button
                    type="submit"
                    disabled={
                      !hasNoFile &&
                      values.content === "" &&
                      values.file === null
                    }
                    className={`mt-3 px-4 py-2 ${
                      values.content === "" && values.file === null
                        ? "bg-slate-400"
                        : "bg-slate-700"
                    } text-white rounded`}
                  >
                    {!hasNoFile ? "Post" : "Share"}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};

export default ModalCreatePost;
