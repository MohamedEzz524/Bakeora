import React from "react";
import { NavLink } from "react-router-dom";

export default function MainTitle({
  title,
  subtitle,
  post = false,
  archive = false,
  search = false,
}) {
  return (
    <div
      id="main-title"
      className={`${
        post
          ? "post-title"
          : archive
          ? "archive-title"
          : search
          ? "search-title"
          : "main-title"
      } w-full h-[250px] pt-[80px] pb-[40px] text-white font-Sans`}
    >
      <div className="container flex justify-center items-center h-full">
        <div
          className={`text-center my-auto  ${
            title === "Blog" ||
            title === "Archives" ||
            title === "Search Result"
              ? "flex justify-between w-full"
              : "space-y-4"
          }`}
        >
          <h1 className="font-Alegreya text-[clamp(1.5rem,3vw+.4rem,3rem)] font-medium">
            {title}
          </h1>
          {post && (
            <p className="normal-body text-footerText [&_span]:text-[#ddd] [&_span:hover]:text-white [&_span]:main-trans">
              By <span>Philip</span> on{" "}
              <span>
                <NavLink to="/blog/archive/April2017">April 22, 2017</NavLink>
              </span>{" "}
              in{" "}
              <span>
                <NavLink to="/blog/category/Classes">Classes</NavLink>,
              </span>
              <span>
                <NavLink to="/blog/category/Photography">Photography</NavLink>
              </span>
            </p>
          )}
          {title !== "About Us" && title !== "Gallery" ? (
            <div
              className={`flex items-center justify-center gap-2 ${
                title === "Archives" || title === "Search Result"
                  ? "text-sm"
                  : "text-lg"
              }`}
            >
              <NavLink
                to="/"
                className="text-[#999] hover:text-text main-trans "
              >
                Home
              </NavLink>
              <p>/</p>
              <p>{subtitle}</p>
            </div>
          ) : (
            <p className="normal-body">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
