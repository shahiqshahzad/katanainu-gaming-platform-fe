import React, { useState, useEffect } from "react";
import {
  format,
  formatDistanceToNow,
  formatDuration,
  intervalToDuration,
} from "date-fns";

const CountdownTimer = ({ startTime }) => {
  const [timeDifference, setTimeDifference] = useState(
    formatDuration(
      intervalToDuration({
        start: startTime ? new Date(format(new Date(startTime), "HH:mm")) : "",
        end: new Date(),
      }),
      { format: ["hours", "minutes"], delimiter: " : " }
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = formatDuration(
        intervalToDuration({
          start: startTime
            ? new Date(format(new Date(startTime), "HH:mm"))
            : "",
          end: new Date(),
        }),
        { format: ["hours", "minutes"], delimiter: " : " }
      );
      setTimeDifference(difference);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return <div>Time Difference: {timeDifference}</div>;
};

export default CountdownTimer;
