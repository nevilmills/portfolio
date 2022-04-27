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
        className="flex flex-col items-center py-28 primaryText text-lg"
        data-aos="fade-up"
      >
        <h3 className="subheading text-4xl text-center mb-5">Get In Touch</h3>
        <p className="max-w-md text-center mb-8">
          My inbox is open to anyone looking to connect. Feel free to email me
          about new opportunities, feedback on my portfolio, or just to say hi!
        </p>
        <button className="btn btn-darkliver">Reach Out</button>
      </div>
    </section>
  );
};
