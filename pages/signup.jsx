import Link from "next/link";
import Cookies from "js-cookie";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { FaChevronDown } from "react-icons/fa";
import { Loader } from "../components/common/Icons";
import { signUpMutation, socialSignIn } from "../utils/api/authModule";
import { registrationValidationSchema } from "../utils/validationSchemas";
import { Field, Label, Select } from "@headlessui/react";
import { FaSteam } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const router = useRouter();
  const { access_token } = router.query;
  const { data } = socialSignIn(access_token);
  if (data) {
    Cookies.set("token", JSON.stringify(data?.data));
    router.push("/");
  }
  const signup = signUpMutation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D136F6] to-[#6D5DD3] p-4">
      <div className="w-full max-w-3xl bg-black/70 text-white backdrop-blur-md rounded-2xl shadow-xl p-8 relative space-y-6">
        <h1 className="text-3xl font-bold text-center ">Sign Up</h1>
        <Formik
          initialValues={{
            name: "",
            userName: "",
            email: "",
            password: "",
            age: "",
            city: "",
            country: "",
            isPage: false,
          }}
          validationSchema={registrationValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            signup.mutate(values);
            if (signup.isError) {
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
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
            >
              <div>
                <label htmlFor="userName" className="text-white">
                  UserName
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter user name"
                  value={values.userName}
                  onChange={handleChange("userName")}
                  onBlur={() => handleBlur("userName")}
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-full block text-white"
                />
                {errors.userName && touched.userName && (
                  <p className="text-red-400">{errors.userName}</p>
                )}
              </div>
              <div>
                <label htmlFor="name" className="text-white">
                  Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={values.name}
                  onChange={handleChange("name")}
                  onBlur={() => handleBlur("name")}
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-full block text-white"
                />
                {errors.name && touched.name && (
                  <p className="text-red-400">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="name" className="text-white">
                  Email
                </label>{" "}
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange("email")}
                  onBlur={handleBlur}
                  value={values.email}
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-full block text-white"
                />
                <p className="text-red-400">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div>
                <label htmlFor="name" className="text-white">
                  Password
                </label>{" "}
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange("password")}
                  onBlur={handleBlur}
                  value={values.password}
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-full block text-white"
                />
                <p className="text-red-400">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>
              <div>
                <label htmlFor="name" className="text-white">
                  Age
                </label>{" "}
                <br />
                <input
                  type="text"
                  name=""
                  onChange={handleChange("age")}
                  onBlur={handleBlur}
                  value={values.age}
                  placeholder="Enter your age"
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-full block text-white"
                />
                <p className="text-red-400">
                  {errors.age && touched.age && errors.age}
                </p>
              </div>
              <div>
                <label htmlFor="name" className="text-white">
                  City
                </label>{" "}
                <br />
                <input
                  type="text"
                  name=""
                  onChange={handleChange("city")}
                  onBlur={handleBlur}
                  value={values.city}
                  placeholder="Enter City Name"
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-full block text-white"
                />
                <p className="text-red-400">
                  {errors.city && touched.city && errors.city}
                </p>
              </div>
              <div>
                <label htmlFor="name" className="text-white">
                  Country
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="country"
                  onChange={handleChange("country")}
                  onBlur={handleBlur}
                  value={values.country}
                  placeholder="Enter country name"
                  className="bg-inherit border border-gray-500 p-2 rounded-md w-full block text-white"
                />
                <p className="mt-1 text-sm text-red-500 font-medium animate-pulse">
                  {errors.country && touched.country && errors.country}
                </p>
              </div>

              <div className="w-full ">
                <Field>
                  <Label className="text-white">Account Type</Label>
                  <div className="relative">
                    <Select
                      name="isPage"
                      value={values.isPage}
                      onChange={handleChange("isPage")}
                      onBlur={handleBlur("isPage")}
                      className="block w-full appearance-none rounded-lg border bg-transparent py-3 border-gray-500 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2"
                    >
                      <option value={false} className="text-black">
                        Personal
                      </option>
                      <option value={true} className="text-black">
                        Brand
                      </option>
                    </Select>
                    <FaChevronDown
                      className="group pointer-events-none absolute top-4 right-2.5 size-4 fill-white/60"
                      aria-hidden="true"
                    />
                  </div>
                </Field>
              </div>

              <div className="flex justify-center col-span-2 ">
                <button
                  type="submit"
                  disabled={signup.isPending}
                  className=" w-fit px-16 py-3  rounded-lg mt-5 bg-gradient-to-r from-[#D136F6] to-[#6D5DD3] font-semibold hover:opacity-90 hover:scale-90 transition duration-300 ease-in-out"
                >
                  Sign Up
                </button>
              </div>
            </form>
          )}
        </Formik>
        {signup.isPending && (
          <div className="absolute right-0 top-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
            <Loader color="#faf089" />
          </div>
        )}
        <h2 className="text-center text-white text-sm mb-2 opacity-80">
          — Or Signup with —
        </h2>
        <div className="flex justify-center gap-5 ">
          <Link
            href={`${process.env.NEXT_PUBLIC_API_URL}auth/googleAuth`}
            className="w-14 h-14 shadow-md  hover:scale-90 transition duration-300 ease-in-out text-center"
          >
            <FcGoogle size={50} />
            <span className="text-sm text-white"> Google</span>
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_API_URL}auth/steamAuth`}
            className="w-14 h-14 shadow-md hover:scale-90 transition duration-300 ease-in-out text-center"
          >
            <FaSteam size={50} />
            <span className="text-sm text-white">Steam</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
