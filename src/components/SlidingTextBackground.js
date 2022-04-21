import React from "react";

const SlidingTextBackground = ({ text }) => {
  const fillArray = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(i + 1);
    }
    return result;
  };

  const rows = fillArray(new Array(30));
  const cols = fillArray(new Array(30));
  const getAnim = (i) => (i % 2 === 0 ? " slide-right " : " slide-left ");
  const getTextStyle = (i) => (i % 2 === 0 ? "bg-bold" : "bg-outline");
  return (
    <div
      //
      className="sliding-text absolute w-full"
    >
      {rows.map((e, i) => (
        <h2
          // style={{ "--slide-duration": i % 2 === 0 ? "20s" : "12s" }}
          className={"w-full relative text-5xl " + getAnim(i) + getTextStyle(i)}
        >
          {cols.map(() => (
            <span className="text-blue-600 m-2">{text}</span>
          ))}
        </h2>
      ))}
    </div>
  );
};

export default SlidingTextBackground;
