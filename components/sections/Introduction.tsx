import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Introduction: React.FC<{}> = ({}) => {
  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);

  return (
    <section className="flex flex-col justify-center min-h-screen items-center w-full">
      <div className="max-w-lg space-y-2 primaryText">
        <h1 data-aos="fade-down" className="text-2xl">
          Hi, my name is
        </h1>
        <h2
          data-aos="fade-down"
          data-aos-delay="50"
          className="text-7xl  font-bold"
        >
          Nevil Mills.
        </h2>
        <p data-aos="fade-down" data-aos-delay="100" className="text-2xl">
          I'm a software engineer from Chilliwack, B.C. Currently, I am focused
          on developing full stack web applications as I search for a team of
          developers to join.
        </p>
        <div>
          <button
            data-aos="fade-left"
            data-aos-delay="100"
            className="btn btn-darkliver mt-6 inline-block"
          >
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
};
