import React from "react";
import { footerData, footerLinks } from "./_Data/_footer";
import DrawLi from "./DrawLi";
import logoImage from "./assets/images/Bakeora-org.png";
import globalImage from "./assets/images/global.png";

export default function Footer() {
  return (
    <footer className="w-full text-footerText normal-body z-1">
      <div className="bg-[rgb(64,61,56)] py-[60px] relative z-1">
        <div className="container">
          <div className="grid gap-[25px] lg:gap-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-5 px-[5px]">
              <h3 className="text-white font-Alegreya medium-body">About us</h3>
              <p className="leading-[2] ">
                I am text block. Click edit button to change this text. Lorem
                ipsum dolor sit amet, consectetur. I am text block. Click edit
                button to change this text. Lorem ipsum dolor sit amet,
                consectetur. We are the champions! We are the most amazing theme
                of all time, yeah.
              </p>
            </div>
            {footerData.map(({ id, title, data }) => (
              <div key={id} className="space-y-5 px-[5px]">
                <h3 className="text-white font-Alegreya medium-body">
                  {title}
                </h3>
                <DrawLi data={data} />
              </div>
            ))}
          </div>
        </div>
        <img
          src={globalImage}
          alt="global-photo"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20 pointer-events-none"
        ></img>
      </div>
      <div className="bg-[rgb(53,51,48)] ">
        <div className="container  pt-[50px] pb-[40px]">
          <div>
            <img
              src={logoImage}
              alt="Logo_Photo"
              className="w-[200px] m-auto px-5"
            />
          </div>
          <div className="mt-[30px] text-center">
            <p>&copy; Copyright 2017. All rights reserved</p>
            <div className="flex gap-2 mt-[15px] justify-center items-center">
              {footerLinks.map(({ id, icon, color, href }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={id}
                  style={{ "--color": color }}
                  className={`p-2 bg-[rgb(64,61,56)] rounded-sm shadow-lg main-trans hover:text-white hover:bg-[var(--color)]`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
