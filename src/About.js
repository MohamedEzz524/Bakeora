import React, { useEffect, useRef, useState } from "react";
import MainTitle from "./MainTitle";
import Subsection from "./Subsection";
import aboutImage from "./assets/images/about-1.jpg";
import { FaInbox } from "react-icons/fa";
import { aboutOurBacking, aboutRecords } from "./_Data/_about";
import DrawOffer from "./DrawOffer";
import { AnimatedSection } from "./AnimatedSection";

export default function About() {
  const [records, setRecords] = useState(aboutRecords.map(() => 0));
  const recordsRef = useRef(null);
  const animationStartedRef = useRef(false);

  const animateRecords = () => {
    const duration = 5000;
    let startTime = performance.now();
    const handleRecords = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      setRecords(
        aboutRecords.map((item) => {
          return Math.floor(item.record * progress);
        })
      );
      if (progress < 1) {
        requestAnimationFrame(handleRecords);
      }
    };

    requestAnimationFrame(handleRecords);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStartedRef.current) {
            animateRecords();
            animationStartedRef.current = true;
            observer.unobserve(recordsRef.current); // ✅ Clean up right away
          }
        });
      },
      { threshold: 0.4 }
    );
    const recordsContainer = recordsRef.current;
    if (recordsContainer) observer.observe(recordsContainer);

    return () => {
      if (recordsContainer) {
        observer.unobserve(recordsContainer);
      }
    };
  }, []);

  return (
    <section id="about">
      <MainTitle title="About Us" subtitle="Learn more about us." />
      <Subsection
        title="Our Story"
        bg="white"
        dir="left"
        img={aboutImage}
        separation={true}
        text1="We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house and commercial builds and we are registered NHBC house builders."
        text2="I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <AnimatedSection>
        <div className="bg-secondBg">
          <div className="container py-[60px]">
            {/* how our backing title */}
            <div className="flex flex-col justify-center items-center gap-5">
              <FaInbox className="text-4xl text-accent" />
              <h3 className="title-style">Why our Bakery?</h3>
              <p className="normal-body text-subtitle">
                Learn why it's worth to try our bakings.
              </p>
            </div>
            {/* how our backing data */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-5 mt-[70px] ">
              {aboutOurBacking.map((offer) => (
                <DrawOffer key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
      {/* Info Numbers */}
      <div id="aboutUsNumber" className="relative" ref={recordsRef}>
        <div className="container subsection flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full text-[rgb(var(--white-rgb),.8)]">
            {aboutRecords.map(({ id, icon, text }, i) => (
              <div
                key={id}
                className="flex col-span-1 flex-col gap-8 items-center px-[10px]"
              >
                <div className="text-4xl ">{icon}</div>
                <p className="text-5xl">{records[i]}</p>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
