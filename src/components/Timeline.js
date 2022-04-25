import { Timeline } from "@mantine/core";
import React, { useEffect, useReducer, useState } from "react";

export default function TimeLine({
  classNames,
  countdownDates,
  events,
  displayDates,
}) {
  function msToTime(ms) {
    ms = Math.abs(ms);
    let seconds = ms / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    hours %= 24;
    seconds = Math.trunc(seconds % 60);
    minutes = Math.trunc(minutes % 60);
    hours = Math.trunc(hours);
    days = Math.trunc(days);
    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }
    if (minutes === 60) {
      hours += 1;
      minutes = 0;
    }

    return { days, hours, minutes, seconds };
  }
  const update = () => {
    const now = new Date();
    const ms = targetDates[0] - now;
    if (ms < 1000) {
      setTargetDates(targetDates.slice(1));
    }
    return msToTime(ms);
  };

  const [targetDates, setTargetDates] = useState(
    countdownDates.map((d) => new Date(d))
  );
  const [countdown, updateCountdown] = useReducer(() => update(), update());

  useEffect(() => {
    const TID = setInterval(() => updateCountdown(), 1000);
    return () => clearInterval(TID);
  });

  return (
    <section id="timeline" className={"section " + classNames}>
      <h1 className="heading">Timeline</h1>
      <p className="desc text-blue-600 font-semibold">{`Time to next stage: ${
        countdown.days
      } Days, ${countdown.hours} Hours, and ${
        countdown.minutes === 0 ? 1 : countdown.minutes
      } minutes.`}</p>
      <Timeline
        className="w-max relative m-auto"
        active={events.length - targetDates.length}
        bulletSize={24}
        lineWidth={2}
      >
        {events.map((e, i) => (
          <Timeline.Item className="desc text-left" title={e}>
            <p className="desc text-left" mt={4}>
              {displayDates[i]}
            </p>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  );
}
