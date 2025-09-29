import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { Loader } from "../components/common/Icons";
import MetamaskWallet from "../components/auth/MetamaskWallet";
import { loginValidationSchema } from "../utils/validationSchemas";
import { loginMutation, socialSignIn } from "../utils/api/authModule";

import { FaSteam } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const router = useRouter();
  const { access_token } = router.query;
  const { data } = socialSignIn(access_token);

  if (data) {
    Cookies.set("token", JSON.stringify(data?.data));
    router.push("/");
  }

  const login = loginMutation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D136F6] to-[#6D5DD3] p-4">
      <div className="w-full max-w-md bg-black/70 text-white backdrop-blur-md rounded-2xl shadow-xl p-8 relative space-y-6">
        <h1 className="text-3xl font-bold text-center ">Login</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            login.mutate(values);
            if (login.isError) setSubmitting(false);
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mt-5">
                <label className="text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange("email")}
                  onBlur={handleBlur}
                  value={values.email}
                  className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <p className="text-red-400 text-sm mt-1">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>

              <div>
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange("password")}
                  onBlur={handleBlur}
                  value={values.password}
                  className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <p className="text-red-400 text-sm mt-1">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>

              <div className="text-right text-sm">
                <Link
                  href="/forget-password"
                  className="text-orange-300 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={login.isPending}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D136F6] to-[#6D5DD3] font-semibold hover:opacity-90 hover:scale-90 transition duration-300 ease-in-out"
              >
                {login.isPending ? "Logging in..." : "Login"}
              </button>
              <h2 className="text-center text-white text-sm mb-4 opacity-80">
                — Or login with —
              </h2>
              <div className="pt-4 grid grid-cols-3 gap-6 place-items-center px-3">
                <Link
                  href={`${process.env.NEXT_PUBLIC_API_URL}auth/googleAuth`}
                  className="w-14 h-14 shadow-md  hover:scale-90 transition duration-300 ease-in-out text-center"
                >
                  <FcGoogle size={60} />
                  <span className="text-sm text-white">Google</span>
                </Link>

                <Link
                  href={`${process.env.NEXT_PUBLIC_API_URL}auth/steamAuth`}
                  className="w-14 h-14 shadow-md hover:scale-90 transition duration-300 ease-in-out text-center"
                >
                  <FaSteam size={60} />
                  <span className="text-sm text-white">Steam</span>
                </Link>

                <MetamaskWallet />
              </div>

              <p className="text-center text-sm text-gray-300 pt-5">
                Don’t have an account?
                <Link
                  href="/signup"
                  className="text-orange-300 hover:underline ml-1"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          )}
        </Formik>

        {(login.isPending || access_token) && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center rounded-2xl">
            <Loader color="#faf089" />
          </div>
        )}
      </div>
    </div>
  );
}
