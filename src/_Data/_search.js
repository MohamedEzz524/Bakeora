import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import simpleImg from "../assets/images/how33.jpg";
import galleryImg1 from "../assets/images/location11.jpg";
import galleryImg2 from "../assets/images/home_about11.jpg";
import galleryImg3 from "../assets/images/how11.jpg";
import galleryImg4 from "../assets/images/how22.jpg";

export const search = [
  {
    id: "homeS",
    title: "Home",
    link: (
      <NavLink to="/" className="flex items-center gap-2 group">
        View page{" "}
        <FaArrowRight className="group-hover:translate-x-1 main-trans text-sm" />
      </NavLink>
    ),
    search: "home page",
  },
  {
    id: "aboutS",
    title: "About",
    link: (
      <NavLink to="/about" className="flex items-center gap-2 group">
        About Us{" "}
        <FaArrowRight className="group-hover:translate-x-1 main-trans text-sm" />
      </NavLink>
    ),
    search: "about page",
  },
  {
    id: "galleryS",
    title: "Gallery Page",
    link: (
      <NavLink to="/gallery" className="flex items-center gap-2 group">
        View Gallery{" "}
        <FaArrowRight className="group-hover:translate-x-1 main-trans text-sm" />
      </NavLink>
    ),
    search: "gallery page",
  },
  {
    id: "offerS",
    title: "Our Offer",
    link: (
      <NavLink to="/ourOffer" className="flex items-center gap-2 group">
        View offers{" "}
        <FaArrowRight className="group-hover:translate-x-1 main-trans text-sm" />
      </NavLink>
    ),
    search: "our offer page",
  },
  {
    id: "blogS",
    title: "Blog Page",
    link: (
      <NavLink to="/blog" className="flex items-center gap-2 group">
        View page{" "}
        <FaArrowRight className="group-hover:translate-x-1 main-trans text-sm" />
      </NavLink>
    ),
    search: "blog page",
  },
  {
    id: "contactS",
    title: "Contact",
    link: (
      <NavLink to="/contact" className="flex items-center gap-2 group">
        Contact Us{" "}
        <FaArrowRight className="group-hover:translate-x-1 main-trans text-sm" />
      </NavLink>
    ),
    search: "contact page",
  },
  {
    id: "archiveAprilS",
    title: "April 3, 2017",
    link: (
      <NavLink
        to="/blog/archive/April2017"
        className="flex items-center gap-2 group"
      >
        View Archive
        <FaArrowRight className="group-hover:translate-x-1 main-trans text-sm" />
      </NavLink>
    ),
    search: "archives April 2017",
  },
  {
    id: "archiveMarchS",
    title: "March 3, 2017",
    link: (
      <NavLink
        to="/blog/archive/March2017"
        className="flex items-center gap-2 group"
      >
        View Archive
        <FaArrowRight className="group-hover:translate-x-1 main-trans text-sm" />
      </NavLink>
    ),
    search: "archives March 2017",
  },
  {
    id: "archivesS",
    title: "Archives",
    link: (
      <NavLink to="/blog/archive" className="flex items-center gap-2 group">
        View Archive
        <FaArrowRight className="group-hover:translate-x-1 main-trans text-sm" />
      </NavLink>
    ),
    search: "archives",
  },
  {
    count: 0,
    id: "simple1",
    title: "Simple Post",
    author: {
      name: "Philip",
      date: "April 22, 2017",
    },
    text: "Contrary to popular belief, Lorem Ipsum isn’t simply random text. It has roots in Virginia Contrary piece of classical Latin literature from 45 BC, making...",
    image: simpleImg,
    category: "simple",
    search: "simple post photography",
    type: "post",
  },
  {
    count: 1,
    id: "basic1",
    title: "Basic Post",
    author: {
      name: "Ali",
      date: "April 22, 2017",
    },
    text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros...",
    category: "basic",
    search: "basic post classes",
    type: "post",
  },
  {
    count: 2,
    id: "gallery1",
    title: "Gallery Post",
    author: {
      name: "Dahy",
      date: "April 22, 2017",
    },
    text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros...",
    images: [galleryImg1, galleryImg2, galleryImg3, galleryImg4],
    category: "gallery",
    search: "travel gallery post",
    type: "post",
  },
  {
    id: "quote1",
    title: "Quote Post",
    text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros...",
    author: {
      name: "Bakeora",
      date: "April 22, 2017",
    },
    quote: {
      author: "Albert Einstein",
      text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    },
    category: "quote",
    search: "quote classes post",
    type: "post",
  },
];
