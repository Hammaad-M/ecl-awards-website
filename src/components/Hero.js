import React from "react";

const Hero = () => {
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
    <section className="hero w-full overflow-hidden relative">
      <div
        //
        className="sliding-text absolute w-full"
      >
        {rows.map((e, i) => (
          <h2
            // style={{ "--slide-duration": i % 2 === 0 ? "20s" : "12s" }}
            className={
              "w-full relative text-5xl " + getAnim(i) + getTextStyle(i)
            }
          >
            {cols.map(() => (
              <span className="text-blue-600 m-2">
                Eastside Civic Leadership Awards
              </span>
            ))}
          </h2>
        ))}
      </div>
      <div className="w-[90%] text-center p-12 rounded-lg bg-white border-none relative m-auto mt-20 sm:w-4/6">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Recognizing Civic Engagement
        </h1>
        <h2 className="text-xl my-3 sm:my-4">
          Eastside Civic Leadership Awards
        </h2>
        <a href="#nominations">
          <button className="btn-primary">Nominate</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
