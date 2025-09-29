import { Formik } from "formik";
import { forgetpasswordValidationSchema } from "../utils/validationSchemas";
import { useRouter } from "next/router";
import { forgetPasswordMutation } from "../utils/api/authModule";
import { Loader } from "../components/common/Icons";
export default function ForgetPassword() {
  const router = useRouter();
  const forgetPassword = forgetPasswordMutation();
  return (
    <div className="flex justify-center items-center h-fit my-5 md:my-0 md:h-screen">
      <div className="bg-gray-600 w-fit p-4 md:p-8 rounded-lg font-satoshi-regular relative">
        <h1 className="text-white text-3xl font-semibold text-center">
          Password Recovery
        </h1>
        <p className="text-white mt-5">
          Enter your email and we'll send you an OTP
        </p>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={forgetpasswordValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            forgetPassword.mutate(values);
            if (forgetPassword.isError) {
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange("email")}
                  onBlur={handleBlur}
                  value={values.email}
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-full md:w-96 block text-white"
                />
                <p className="text-red-400">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={forgetPassword.isPending}
                  className="px-8 py-2 border rounded-lg mt-5 text-white"
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </Formik>
        {forgetPassword.isPending && (
          <div className="absolute right-0 top-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
            <Loader color="#faf089" />
          </div>
        )}
      </div>
    </div>
  );
}
