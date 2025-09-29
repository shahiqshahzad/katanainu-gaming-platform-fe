// components/ProgressBar.tsx
import React from "react";
import { differenceInCalendarDays } from "date-fns";

const ProgressBar = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();

  // Calculate the total number of days (including start and end date)
  const totalDays = differenceInCalendarDays(end, start) + 1;
  const daysPassed = Math.min(
    differenceInCalendarDays(today, start) + 1,
    totalDays
  );
  const daysLeft = Math.max(totalDays - daysPassed, 0);

  // Progress percentage (0-100)
  const progressPercent = Math.min((daysPassed / totalDays) * 100, 100);

  return (
    <div className="pt-1 grid grid-cols-4  items-center">
      <div className="relative w-full h-1 bg-gray-800 rounded-full col-span-3">
        <div
          className="absolute left-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
          style={{ width: `${progressPercent}%` }}
        ></div>
        <div
          className="absolute top-0 w-2 h-2 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/4"
          style={{ left: `${progressPercent}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-400  text-right col-span-1">
        {`${daysLeft} Days Left`}
      </div>
    </div>
  );
};

export default ProgressBar;
