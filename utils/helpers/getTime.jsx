import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
} from "date-fns";

export const getFormatedTime = (createdAt) => {
  const date = new Date();

  if (differenceInHours(date, createdAt) < 1) {
    return `${differenceInMinutes(date, createdAt)}m ago`;
  } else if (differenceInHours(date, createdAt) < 24) {
    return `${differenceInHours(date, createdAt)}h ago`;
  } else if (differenceInDays(date, createdAt) < 31) {
    return `${differenceInDays(date, createdAt)}d ago`;
  } else {
    return `${format(createdAt, "MM/dd/yy")}`;
  }
};
