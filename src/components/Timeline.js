import { Timeline } from "@mantine/core";
import React, { useEffect, useReducer } from "react";

export default function TimeLine({ classNames, targetDate }) {
  const format = (string) => {
    if (string < 10) {
      return "0" + string;
    } else {
      return string;
    }
  };

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
    return msToTime(targetDate - now);
  };
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
      } Days, ${format(countdown.hours)} Hours, and ${format(
        countdown.minutes
      )} minutes.`}</p>
      <Timeline
        className="w-max relative m-auto"
        active={0}
        bulletSize={24}
        lineWidth={2}
      >
        <Timeline.Item className="desc text-left" title="Nominations open">
          <p className="desc text-left" mt={4}>
            End of February
          </p>
        </Timeline.Item>

        <Timeline.Item className="desc text-left" title="Nominations Close">
          <p className="desc text-left" mt={4}>
            Mid-April
          </p>
        </Timeline.Item>

        <Timeline.Item
          className="desc text-left"
          title="Selection Committee Convenes"
        >
          <p className="desc text-left" mt={4}>
            Mid-April to Early May
          </p>
        </Timeline.Item>
        <Timeline.Item className="desc text-left" title="Awardees notified">
          <p className="desc text-left" mt={4}>
            Early May
          </p>
        </Timeline.Item>
        <Timeline.Item className="desc text-left" title="Award Celebration">
          <p className="desc text-left" mt={4}>
            Early to Mid May
          </p>
        </Timeline.Item>
      </Timeline>
    </section>
  );
}
