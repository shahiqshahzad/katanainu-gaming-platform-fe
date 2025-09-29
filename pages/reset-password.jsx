import { Formik } from "formik";
import { resetpasswordValidationSchema } from "../utils/validationSchemas";
import { resetPasswordMutation } from "../utils/api/authModule";
import { Loader } from "../components/common/Icons";
import { useEmail } from "../store/store";

export default function ResetPassword() {
  const resetPassword = resetPasswordMutation();
  const { email } = useEmail();

  return (
    <div className="flex justify-center items-center h-fit my-5 md:my-0 md:h-screen">
      <div className="bg-gray-600 w-fit p-4 md:p-8 rounded-lg font-satoshi-regular relative">
        <h1 className="text-white text-3xl font-semibold text-center">
          Password Reset
        </h1>
        <Formik
          initialValues={{
            email,
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={resetpasswordValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            resetPassword.mutate(values);
            if (resetPassword.isError) {
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
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <label htmlFor="name" className="text-white">
                  New Password
                </label>{" "}
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange("newPassword")}
                  onBlur={handleBlur}
                  value={values.newPassword}
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-60 md:w-96 block text-white"
                />
                <p className="text-red-400">
                  {errors.newPassword &&
                    touched.newPassword &&
                    errors.newPassword}
                </p>
              </div>
              <div className="mt-5">
                <label htmlFor="name" className="text-white">
                  Confirm Password
                </label>{" "}
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm password"
                  onChange={handleChange("confirmPassword")}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-60 md:w-96 block text-white"
                />
                <p className="text-red-400">
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword}
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={resetPassword.isPending}
                  className="px-8 py-2 border rounded-lg mt-5 text-white"
                >
                  Reset Password
                </button>
              </div>
            </form>
          )}
        </Formik>
        {resetPassword.isPending && (
          <div className="absolute right-0 top-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
            <Loader color="#faf089" />
          </div>
        )}
      </div>
    </div>
  );
}
