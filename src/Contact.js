import React from "react";
import MainTitle from "./MainTitle";
import FormContact from "./FormContact";
import DrawLi from "./DrawLi";
import { contactInfo } from "./_Data/_home";

export default function Contact() {
  return (
    <section id="contact" className="font-Sans">
      <MainTitle title="Contact" subtitle="Contact us" />
      <div className="container flex flex-col gap-[50px] lg:flex-row lg:gap-5 py-[60px]">
        {/* Left Contact */}
        <div className="w-full lg:w-[65%] ">
          <h3 className="title-style mb-5">Contact Form</h3>
          <FormContact reverse={true} buttonText="Send" />
        </div>
        {/* Right Contact */}
        <div className="flex-1 space-y-5 text-text">
          <h3 className="title-style">Contact Information</h3>
          <p>
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="">
            <p className="mb-[20px]">Our contact details:</p>
            <DrawLi data={contactInfo} color="var(--accent)" />
          </div>
        </div>
        {/* map */}
      </div>
      <div
        id="google-map-contact"
        className="relative w-full aspect-[16/9] min-h-[300px] max-h-[500px] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,.4)] z-10 pointer-events-none">
          <div className="absolute top-4 left-4 bg-white/80 text-title px-4 py-2 rounded-md backdrop-blur-sm">
            🍰 Visit Bakeora – Your Sweet Spot!
          </div>
        </div>
        <iframe
          className="border-none w-full h-full z-0"
          title="cznBorak"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081742.2231933135!2d33.5977438125!3d41.0358899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab716d26c9505%3A0xaeb6cf03050318fe!2sCznBurak%20Restaurant!5e0!3m2!1sar!2seg!4v1745920023398!5m2!1sar!2seg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
