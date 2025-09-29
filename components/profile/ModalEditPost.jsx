import React from "react";
import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import API_END_POINTS from "../../utils/api/api_endpoints";
import axios from "../../utils/api/interceptor";

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
    // backgroundColor: "#140e1d",
    backgroundColor: "rgb(0, 0, 0, 0.7)",
  },
};

const ModalEditPost = ({
  modalIsOpen,
  closeModal,
  postId,
  content,
  refetch,
  page,
  setPage,
}) => {
  const createPostMutation = useMutation({
    mutationFn: (formData) => {
      return axios.post(`${API_END_POINTS.EDIT_POST}`, formData);
    },
    onSuccess: (res) => {
      toast.success("Post edited successfully");
      closeModal();
      setPage(page);
      refetch();
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    let data = {
      content: values.content,
      postId,
    };
    await createPostMutation.mutateAsync(data);
    setSubmitting(false);
  };

  return (
    <>
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
        <Formik
          initialValues={{
            content: content,
          }}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting, setFieldValue }) => {
            const handleContentChange = (event) => {
              setFieldValue("content", event.target.value);
            };

            return (
              <Form className="w-full">
                <Field
                  as="textarea"
                  name="content"
                  onChange={handleContentChange}
                  placeholder="Write description"
                  className="border border-gray-700 rounded outline-none w-full h-32 p-2 mt-3 bg-[#201F25] text-white"
                />
                <ErrorMessage
                  name="content"
                  component="div"
                  className="text-red-500"
                />
                <div className="w-full flex justify-center">
                  <button
                    type="submit"
                    className={`mt-3 px-4 py-2 bg-slate-700 text-white rounded`}
                  >
                    {isSubmitting ? "Posting..." : "Edit Post"}
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

export default ModalEditPost;
