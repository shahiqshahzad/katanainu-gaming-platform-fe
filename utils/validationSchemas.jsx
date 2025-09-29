import * as Yup from "yup";
const registrationValidationSchema = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 chatacters")
    .required("Password is required"),
  // confirmPassword: Yup.string()
  //   .required("Confirm password is required")
  //   .oneOf([Yup.ref("password"), ""], "Passwords must match"),
  age: Yup.number().required().positive().integer(),
  city: Yup.string().required(),
  country: Yup.string().required(),
});

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 chatacters")
    .required("Password is required"),
});
const otpValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  otp: Yup.number().required().positive().integer().required("OTP is required"),
});
const forgetpasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
});
const resetpasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 chatacters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("newPassword"), ""], "Passwords must match"),
});
const addGamesSchema = Yup.object().shape({
  gameName: Yup.string().required("Game name is required"),
  gameYear: Yup.number().required("Required"),
  file: Yup.mixed().required("Choose an image"),
});

const createTournamentSchema = Yup.object().shape({
  name: Yup.string().required("Tournament name is required"),
  description: Yup.string().required("Description is required"),
  rounds: Yup.number().required("Rounds are required"),
  prize: Yup.number().required("Prize is required"),
  maxTeams: Yup.number().required("Max teams are required"),
  gameId: Yup.string().required("Game is required"),
  rules: Yup.string().required("Rules are required"),
  minTeamSize: Yup.number().required("Min team size is required"),
  startDate: Yup.date().required("Tournament start date is required"),
  endDate: Yup.date().required("Tournament end date is required"),
  enrollmentStartDate: Yup.date().required("Enrollment start date is required"),
  enrollmentEndDate: Yup.date().required("Enrollment end date is required"),
  file: Yup.mixed().required("Choose an image"),
});
const createTeamSchema = Yup.object().shape({
  teamName: Yup.string().required("Team name is required"),
  description: Yup.string().required("Description is required"),
  region: Yup.string().required("Region is required"),
  teamImage: Yup.mixed().required("Team image is required"),
});
const createMatchSchema = Yup.object().shape({
  round: Yup.number()
    .required("Round number is required")
    .positive("Round number must be positive")
    .integer("Round number must be an integer"),
  roundType: Yup.string().required("Round type is required"),
  startTime: Yup.date().required("Start time is required"),
  endTime: Yup.date()
    .required("End time is required")
    .min(Yup.ref("startTime"), "End time must be after start time"),
  teamA: Yup.string().required("Team A is required"),
  teamB: Yup.string()
    .required("Team B is required")
    .notOneOf([Yup.ref("teamA")], "Team A and Team B must be different"),
  status: Yup.string().required("Status is required"),
});

export {
  registrationValidationSchema,
  loginValidationSchema,
  otpValidationSchema,
  forgetpasswordValidationSchema,
  resetpasswordValidationSchema,
  addGamesSchema,
  createTournamentSchema,
  createTeamSchema,
  createMatchSchema,
};
