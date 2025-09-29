import { Formik } from "formik";
import { otpValidationSchema } from "../utils/validationSchemas";
import { verifyOtpMutation } from "../utils/api/authModule";
import { Loader } from "../components/common/Icons";
import Cookies from "js-cookie";
import { useEmail } from "../store/store";
import { useRouter } from "next/router";

export default function VerifyOTP() {
  const verifyOTP = verifyOtpMutation();
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const { email } = useEmail();
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D136F6] to-[#6D5DD3] p-4">
      <div className=" bg-black/70 text-white backdrop-blur-md rounded-2xl shadow-xl p-8 relative space-y-6">
        <Formik
          initialValues={{
            email: user?.email || email,
            otp: "",
          }}
          validationSchema={otpValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            verifyOTP.mutate(values);
            if (verifyOTP.isError) {
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
                  Email
                </label>{" "}
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={user?.email || email}
                  disabled
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-60 md:w-96 block text-white"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="name" className="text-white">
                  OTP
                </label>{" "}
                <br />
                <input
                  type="password"
                  name="otp"
                  placeholder="Enter OTP"
                  onChange={handleChange("otp")}
                  onBlur={handleBlur}
                  value={values.otp}
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-60 md:w-96 block text-white"
                />
                <p className="text-red-400">
                  {errors.otp && touched.otp && errors.otp}
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={verifyOTP.isPending}
                  className="px-8 py-3  rounded-lg mt-5 text-white bg-gradient-to-r from-[#D136F6] to-[#6D5DD3] font-semibold hover:opacity-90 hover:scale-90 transition duration-300 ease-in-out"
                >
                  Verify
                </button>
              </div>
            </form>
          )}
        </Formik>
        {verifyOTP.isPending && (
          <div className="absolute right-0 top-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
            <Loader color="#faf089" />
          </div>
        )}
      </div>
    </div>
  );
}
