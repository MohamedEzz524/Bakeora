import React from "react";
import homeAbout from "./assets/images/home_about.jpg";
import homeLocation from "./assets/images/location.jpg";
import { aboutUs, ourBacking, contactInfo } from "./_Data/_home";
import DrawLi from "./DrawLi";
import Subsection from "./Subsection";
import { AnimatedSection } from "./AnimatedSection";

export default function Home() {
  return (
    <section id="home" className="font-Sans">
      <div
        id="home-hero"
        className="md:h-screen h-[calc(60vh)] pt-[60px] relative"
      >
        {/* Hero page */}
        <div className="container m-auto h-full flex flex-col justify-center items-center text-center">
          <div className="leading-[1.33]">
            <h3 className="text-[rgba(var(--white-rgb),0.92)] text-[clamp(1.375rem,1.4vw+.2rem,1.75rem)] mb-[10px]">
              Welcome to
            </h3>
            <h1 className="text-white font-Alegreya text-[clamp(2rem,5.4vw+.4rem,5rem)] mb-[10px]">
              Family Bakeora
            </h1>
            <p className="max-w-[700px]  lg:leading-[2] text-[rgba(var(--white-rgb),0.92)] text-[clamp(1rem,1.4vw+.4rem,2rem)]">
              We're the biggest, best equipped and most advanced Bakery in the
              greater Los Angeles area.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-[20px] text-white font-bold text-[clamp(.9rem,1vw+.2rem,1.2rem)]">
            <button
              onClick={() => {
                document
                  .getElementById("home-about")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="main-button bg-accent  "
            >
              Learn More
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("home-contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="main-button border border-white "
            >
              Contact Us
            </button>
          </div>
        </div>
        <a
          href="#home-about"
          className="absolute flex justify-center bottom-10 left-1/2 -translate-x-1/2 w-[30px] h-[50px] rounded-full border-2 border-bgNav shadow-sm]"
        >
          <span className="relative w-2 h-2 top-[5px] bg-white rounded-full animate-bounceFate "></span>
        </a>
      </div>
      {/* Home About */}
      <div id="home-about" className="">
        <Subsection
          title="Who we are?"
          bg="white"
          dir="left"
          img={homeAbout}
          text1="We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better."
          data={aboutUs}
          dataColor="white"
        />
        <Subsection
          title="Our Location"
          bg="second"
          dir="right"
          img={homeLocation}
          text1="We have been operating for over 30 years and are Members of The
              Federation of Master Builders. We work on projects big and small
              from small residential extensions to full house. We are so happy
              with this theme. Everyday it make our lives better."
          text2="Story on projects big and small from small residential extensions
              to full house. We are so happy with this theme. Everyday it make
              our lives better."
        />
      </div>
      {/* Our Baking Section */}
      <AnimatedSection delay={0.2}>
        <div
          id="home-our-backing"
          className="subsection leading-[2] bg-bg shadow-lg"
        >
          <div className="container">
            <div className="text-center mb-[50px]">
              <h3 className="title-style mb-[20px]">Our Baking</h3>
              <p className="text-text normal-body">
                Learn more about them. We have worked truly hard to make them
                perfect for every use.
              </p>
            </div>
            <div className="flex flex-col gap-[50px] md:flex-row md:gap-[5%] ">
              {ourBacking.map(({ id, image, title, desc }) => (
                <div
                  key={id}
                  className="flex flex-col md:w-[30%] gap-[20px] bg-white backdrop-blur-sm hover:shadow-xl transition-shadow duration-300 text-center pb-5 shadow-lg rounded-2xl"
                >
                  <img
                    src={image}
                    loading="lazy"
                    alt="our-backing-photo"
                    className="w-full h-auto object-cover "
                  />
                  <h3 className="title-style">{title}</h3>
                  <p className="text-text normal-body">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
      <div id="home-contact" className="bg-secondBg subsection leading-[2]">
        <div className="container">
          <div className="flex flex-col gap-[50px] md:flex-row md:gap-[4%] text-text normal-body">
            <div className="md:w-[48%] space-y-5">
              <h3 className="title-style">Contact Information</h3>
              <p>
                I am text block. Click edit button to change this text. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="">
                <p className="mb-[20px]">Our contact details:</p>
                <DrawLi data={contactInfo} color="var(--accent)" />
              </div>
            </div>
            <div
              id="google-map"
              className="relative md:w-[48%] h-[520px] rounded-md overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-[rgba(0,0,0,.4)] z-10 pointer-events-none">
                <div className="absolute top-4 left-4 bg-white/80 text-title px-4 py-2 rounded-md shadow backdrop-blur-sm">
                  🍰 Visit Bakeora – Your Sweet Spot!
                </div>
              </div>
              <iframe
                className="border-0 w-full h-full z-0"
                title="cznBorak"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081742.2231933135!2d33.5977438125!3d41.0358899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab716d26c9505%3A0xaeb6cf03050318fe!2sCznBurak%20Restaurant!5e0!3m2!1sar!2seg!4v1745920023398!5m2!1sar!2seg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
