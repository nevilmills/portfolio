import React, { useEffect } from "react";
import { SectionHeader } from "../SectionHeader";
import AOS from "aos";
import "aos/dist/aos.css";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);

  return (
    <section id="contact">
      <div
        className="flex flex-col items-center py-28 space-y-10 primaryText text-xl"
        data-aos="fade-up"
      >
        <h3 className="subheading text-4xl mb-2 font-lato text-center">
          Get In Touch
        </h3>
        <p className="max-w-md text-center">
          Feel free to send me an email about new opportunities, feedback on my
          portfolio, or even just to say hi!
        </p>
        <p>I'm always open to connecting with like-minded people.</p>
        <button className="btn btn-darkliver font-lato">Reach Out</button>
      </div>
    </section>
  );
};
