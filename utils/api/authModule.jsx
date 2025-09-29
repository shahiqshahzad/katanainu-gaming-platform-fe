import { toast } from "react-toastify";
import API_END_POINTS from "./api_endpoints";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "./interceptor";
import { useEmail } from "../../store/store";

// signUp
export function signUpMutation() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (values) => {
      const response = await axios.post(`${API_END_POINTS.SIGNUP}`, {
        email: values.email,
        password: values.password,
        userName: values.userName,
        age: values.age,
        city: values.city,
        country: values.country,
        name: values.name,
        isPage: values.isPage,
      });
      return response.data;
    },
    onSuccess: (res) => {
      toast.success(res?.message);
      const accessToken = JSON.stringify(res?.data);
      Cookies.set("token", accessToken, { expires: 30 });
      router.push("/verifyOTP");
    },
    onError: (err) => {
      if (err.response) {
        toast.error(err.response.data.message);
      } else if (err.request) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    },
  });
}

// login
export function loginMutation() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (values) => {
      const response = await axios.post(`${API_END_POINTS.LOGIN}`, {
        email: values.email,
        password: values.password,
      });
      return response.data;
    },
    onSuccess: (res) => {
      toast.success(res?.message);
      const accessToken = JSON.stringify(res?.data);
      Cookies.set("token", accessToken, { expires: 30 });
      if (res?.data?.role === "user") {
        router.push("/");
      } else {
        router.push("/admin_dashboard");
      }
    },
    onError: (err) => {
      if (err.response) {
        toast.error(err.response.data.message);
      } else if (err.request) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    },
  });
}

// verifyOTP
export function verifyOtpMutation() {
  const router = useRouter();
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  return useMutation({
    mutationFn: async (values) => {
      const response = await axios.post(`${API_END_POINTS.VERIFY_OTP}`, {
        email: values.email,
        otp: values.otp,
      });
      return response.data;
    },
    onSuccess: (res) => {
      toast.success(res?.message);
      if (!user) {
        router.push("/reset-password");
      } else {
        router.push("/");
      }
    },
    onError: (err) => {
      if (err.response) {
        toast.error(err.response.data.message);
      } else if (err.request) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    },
  });
}

// forgetPassword
export function forgetPasswordMutation() {
  const router = useRouter();
  const setEmail = useEmail((state) => state.setEmail);
  return useMutation({
    mutationFn: async (values) => {
      const response = await axios.post(`${API_END_POINTS.FORGET_PASSWORD}`, {
        email: values.email,
      });
      setEmail(values.email);
      return response.data;
    },
    onSuccess: (res) => {
      toast.success(res?.message);
      router.push("/verifyOTP");
    },
    onError: (err) => {
      if (err.response) {
        toast.error(err.response.data.message);
      } else if (err.request) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    },
  });
}

// reset-password
export function resetPasswordMutation() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (values) => {
      const response = await axios.patch(`${API_END_POINTS.RESET_PASSWORD}`, {
        email: values.email,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
      });
      return response.data;
    },
    onSuccess: (res) => {
      toast.success(res?.message);
      router.push("/login");
    },
    onError: (err) => {
      if (err.response) {
        toast.error(err.response.data.message);
      } else if (err.request) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    },
  });
}

export function socialSignIn(access_token) {
  return useQuery({
    queryKey: ["user", access_token],
    queryFn: async () => {
      const response = await axios.get(`${API_END_POINTS.GOOGLE_SIGNIN}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return response.data;
    },
    enabled: !!access_token,
    refetchOnWindowFocus: false,
  });
}

export function assignMetaMask() {
  return useMutation({
    mutationFn: async (walletAddress) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.ASSIGN_METAMASK}`,
          walletAddress
        );
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

export function metaMaskSignIn() {
  const router = useRouter();
  return useMutation({
    mutationFn: async (postData) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.METAMASK_SIGNIN}`,
          { metaMaskSignature: postData?.signature },
          {
            headers: {
              Authorization: `Bearer ${postData?.signMessage?.access_token}`,
            },
          }
        );
        Cookies.set("token", JSON.stringify(response.data?.data));
        router.push("/");
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

// logout
export function logout() {
  const router = useRouter();
  return useMutation({
    mutationFn: async () => {
      const response = await axios.get(`${API_END_POINTS.LOGOUT}`);
      return response.data;
    },
    onSuccess: () => {
      Cookies.remove("token");
      router.push("/login");
    },
    onError: (error) => {
      console.log(error?.response?.data?.message);
    },
  });
}
