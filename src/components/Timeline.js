import { Timeline, p } from "@mantine/core";

export default function TimeLine({ classNames }) {
  return (
    <section id="timeline" className={"section " + classNames}>
      <h1 className="heading">Timeline</h1>

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
