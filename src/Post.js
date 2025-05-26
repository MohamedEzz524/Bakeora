import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import Slider from "./Slider";
import { NavLink } from "react-router-dom";

export default function Post({ data }) {
  const { id, title, author, text, category, image, images, quote } = data;
  return (
    <div className="flex flex-col w-full shadow-sm ">
      {/* header */}
      {category === "simple" ? (
        <img
          className="w-fit h-auto object-cover aspect-[16/9] cursor-pointer"
          src={image}
          alt="Simple_Post"
          loading="lazy"
        />
      ) : category === "gallery" ? (
        <Slider images={images} ratio="4/3" id={id} />
      ) : category === "quote" ? (
        <NavLink
          to="/blog/post/quote"
          className="p-5 bg-accent text-white leading-[1.6] cursor-pointer main-trans hover:bg-[#333]"
        >
          <p className="medium-body">{quote.text}</p>
          <div className="flex justify-between items-center mt-[10px]">
            <p className="text-sm">-{quote.author}</p>
            <FaQuoteLeft className="opacity-60" />
          </div>
        </NavLink>
      ) : (
        <></>
      )}
      {/* body */}
      <div className="p-5 border border-black/5 leading-[1.8]">
        <h3 className="text-title medium-body font-Alegreya">{title}</h3>
        <p className="small-body text-footerText ">
          By {author.name} on April 22, 2017
        </p>
        <p className="py-[10px] text-text normal-body">{text}</p>
        <NavLink
          to={`/blog/post/${category}`}
          className="flex gap-2 items-center text-text text-sm mt-[15px] cursor-pointer main-trans hover:text-title group"
        >
          Read more
          <FaArrowRight className="main-trans group-hover:translate-x-1" />
        </NavLink>
      </div>
    </div>
  );
}
