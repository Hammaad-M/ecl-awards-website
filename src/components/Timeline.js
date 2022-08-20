import { Timeline } from "@mantine/core";
import React, {
  useEffect,
  useReducer,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import { fadeInSmall } from "./animations";
import { gsap } from "gsap";
import FlyInText from "./FlyInText";
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
  const timelineWrapper = useRef(null);
  useLayoutEffect(() => {
    const q = gsap.utils.selector(timelineWrapper);
    gsap.from(q("*"), {
      opacity: 0.01,
      duration: 0.15,
      stagger: 0.06,
      y: 50,
      ease: "power2.out",
      delay: 0.1,
      scrollTrigger: {
        trigger: q("*"),
        start: "top 80%",
      },
    });
  }, []);
  useEffect(() => {
    const TID = setInterval(() => updateCountdown(), 1000);
    return () => clearInterval(TID);
  });

  return (
    <section id="timeline" className={"section md:p-0 " + classNames}>
      <h1 className="heading">
        <FlyInText text="Timeline" />
      </h1>
      <p className="desc text-blue-600 font-semibold">{`Time to next stage: ${
        countdown.days
      } Days, ${countdown.hours} Hours, and ${
        countdown.minutes === 0 ? 1 : countdown.minutes
      } minutes.`}</p>
      <Timeline
        ref={timelineWrapper}
        className="w-max relative m-auto"
        active={events.length - targetDates.length}
        bulletSize={24}
        lineWidth={2}
      >
        {events.map((e, i) => (
          <Timeline.Item className="timeline-item desc text-left" title={e}>
            <p className="desc text-left" mt={4}>
              {displayDates[i]}
            </p>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  );
}
