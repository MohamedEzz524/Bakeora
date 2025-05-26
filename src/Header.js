import { NavLink, useLocation } from "react-router-dom";
import logo from "./assets/images/Logo.png";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const links = [
  { label: "Home", path: "" },
  { label: "About", path: "about" },
  { label: "Our Offer", path: "ourOffer" },
  { label: "Gallery", path: "gallery" },
  {
    label: "Blog",
    path: "blog",
    dropdown: [
      { name: "Simple post", path: "/blog/post/simple" },
      { name: "Gallery post", path: "/blog/post/gallery" },
      { name: "Quote post", path: "/blog/post/quote" },
      { name: "Basic post", path: "/blog/post/basic" },
      { name: "Archive post", path: "/blog/archive" },
    ],
  },
  { label: "Contact", path: "contact" },
];
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isSmall, setIsSmall] = useState(false);
  const location = useLocation(); // 🆕 Get current path
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    const handleResizing = () => {
      setIsSmall(window.innerWidth <= 768);
    };
    // const handleScroll = () => {
    //   const home = document.getElementById("home"); // 🆕 move inside handleScroll
    //   if (!home) {
    //     setIsScrolled(true); // If no home, keep nav small
    //     return;
    //   }

    //   if (location.pathname === "/" || location.pathname === "") {
    //     setIsScrolled(home.getBoundingClientRect().top < -100);
    //   } else {
    //     setIsScrolled(true);
    //   }
    // };

    handleResizing();
    handleScroll();
    window.addEventListener("resize", handleResizing);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResizing);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={` nav-container fixed left-1/2 -translate-x-1/2 font-Sans z-[100] flex justify-between items-center main-trans ${
          isScrolled
            ? "md:top-4 h-[60px] bg-gradient-to-b from-white/70 to-white/40 backdrop-blur-[20px] text-title md:rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
            : "top-0 bg-transparent text-white h-[90px]"
        }`}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-end gap-2">
          <img
            src={logo}
            alt="LOGO"
            loading="lazy"
            className={`h-[45px] ${
              isScrolled ? "scale-100" : "scale-110"
            } main-trans`}
          />
          <p className="text-3xl md:text-4xl drop-shadow-lg">Bakeora</p>
        </NavLink>
        {/* Nav Links */}
        {!isSmall ? (
          <ul className="flex items-center gap-2 text-[clamp(1.1rem,1vw+.2rem,1.25rem)] font-medium main-trans h-full">
            {links.map(({ label, path, dropdown = false }) => (
              <li
                onMouseEnter={
                  dropdown ? () => setOpenDropdown(true) : undefined
                }
                onMouseLeave={
                  dropdown ? () => setOpenDropdown(false) : undefined
                }
                aria-haspopup="true"
                role="link"
                key={path}
                className={`px-1 h-full ${
                  dropdown ? "group" : ""
                } content-center relative before:left-1/2 before:-translate-x-1/2  before:top-0
                before:w-0 before:h-[2px] before:bg-accent before:main-trans before:absolute has-[.activeLink]:before:w-full ${
                  isScrolled ? "has-[.activeLink]:bg-white/50 main-trans" : ""
                }`}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `inline-block h-full content-center main-trans px-1
                ${
                  isActive
                    ? ` ${isScrolled ? "text-[#000]" : "text-accent "}  ${
                        dropdown ? "" : "pointer-events-none"
                      } activeLink`
                    : "hover:text-accent hover:tracking-wide"
                }`
                  }
                >
                  {dropdown ? (
                    <div
                      onClick={() => setOpenDropdown(false)}
                      className="flex items-center group relative h-full w-full"
                    >
                      {label}
                      <FaAngleDown
                        className={`absolute main-trans left-1/2 -translate-x-1/2 group-hover:rotate-180 ${
                          isScrolled ? "bottom-0" : "bottom-4"
                        }`}
                      />
                    </div>
                  ) : (
                    label
                  )}
                </NavLink>
                {/* Blog Drop Down Large */}
                {dropdown && openDropdown && (
                  <ul
                    role="menu"
                    className={`absolute hidden group-hover:block normal-body py-2 w-[140px] bottom-[0px] translate-y-full right-0 ${
                      isScrolled
                        ? "bg-gradient-to-r from-white/80 to-gray-100/60"
                        : "bg-transparent"
                    }  shadow-lg border border-white/30 backdrop-blur-[12px] overflow-hidden`}
                  >
                    {dropdown.map((d) => (
                      <li
                        role="menuitem"
                        key={d.path}
                        className={`px-1 py-[2px] ${
                          isScrolled ? "text-[#555]" : "text-white"
                        }  hover:text-title`}
                      >
                        <NavLink
                          to={d.path}
                          onClick={() => setOpenDropdown(false)}
                          className="block w-full h-full hover:bg-white/90 group hover:tracking-wide px-1 py-1"
                        >
                          <p className="hover:translate-x-1 main-trans">
                            {d.name}
                          </p>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        ) : (
          // Menu
          <div className="flex items-center h-full  pr-5">
            <div
              onClick={() => {
                setOpenDropdown(false);
                setOpenMenu((prev) => !prev);
              }}
              className={`w-[30px] h-[20px] cursor-pointer relative flex flex-col justify-between items-center duration-200 ${
                openMenu ? "max-h-[8px]" : "max-h-[20px] delay-300"
              }`}
            >
              <div
                className={`w-full h-[2px] transition-transform duration-300 
                ${openMenu ? "rotate-45 delay-200" : "rotate-0 "}
                ${isScrolled ? "bg-black/70" : "bg-white/70"}`}
              ></div>
              <div
                className={`w-full h-[2px] transition-[max-height] duration-300
                ${openMenu ? "max-h-0 " : "max-h-[2px] delay-200 "}
                ${isScrolled ? "bg-black/70" : "bg-white/70"}`}
              ></div>
              <div
                className={`w-full h-[2px] transition-transform duration-300 
                ${openMenu ? "-rotate-45 delay-200" : "rotate-0 "}
                ${isScrolled ? "bg-black/70" : "bg-white/70"}`}
              ></div>
            </div>
            {/* Menu Dropdown */}
            <ul
              className={`${
                openMenu
                  ? "max-h-[400px] py-1 border-b border-t border-black/10"
                  : "max-h-0"
              } transition-[max-height,padding,border] duration-500 sm:px-8 sm:pr-[3rem] px-4  pr-[2rem]  bg-white text-title absolute bottom-[1px] left-0 w-full translate-y-full text-[1rem] shadow-md overflow-hidden `}
            >
              {links.map(({ label, path, dropdown = false }, i) => (
                <li
                  key={path + i}
                  className=" [&:not(:last-of-type)]:border-b border-black/5"
                >
                  {!dropdown ? (
                    <NavLink
                      onClick={() => {
                        setOpenDropdown(false);
                        setOpenMenu(false);
                      }}
                      to={path}
                      className="block py-[10px]"
                    >
                      {label}
                    </NavLink>
                  ) : (
                    <div
                      onClick={() => setOpenDropdown((prev) => !prev)}
                      className="flex flex-col justify-between cursor-pointer py-[10px] group relative h-full w-full"
                    >
                      <div className="flex justify-between items-center">
                        {label}
                        <FaAngleDown
                          className={`main-trans ${
                            openDropdown ? "rotate-180" : ""
                          } `}
                        />
                      </div>
                      {/* Blog Dropdown */}
                      <ul
                        role="menu"
                        className={`${
                          openDropdown
                            ? "max-h-[200px] py-2 duration-500"
                            : "max-h-0 duration-100"
                        } normal-body  w-full flex flex-wrap gap-1 text-title bg-white overflow-hidden transition-[max-height,padding]`}
                      >
                        <li
                          role="menuitem"
                          className="px-2 py-[2px] text-[#555] hover:text-title basis-[45%] sm:basis-[30%] border border-black/5"
                        >
                          <NavLink
                            to={path}
                            onClick={() => setOpenMenu(false)}
                            className="block w-full h-full hover:bg-white/90 group hover:tracking-wide px-1 py-1"
                          >
                            <p className="hover:translate-x-1 main-trans">
                              Blog Index
                            </p>
                          </NavLink>
                        </li>
                        {dropdown.map((d) => (
                          <li
                            role="menuitem"
                            key={d.path}
                            className="px-2 py-[2px] text-[#555] hover:text-title basis-[45%] sm:basis-[30%] border border-black/5"
                          >
                            <NavLink
                              to={d.path}
                              onClick={() => setOpenMenu(false)}
                              className="block w-full h-full hover:bg-white/90 group hover:tracking-wide px-1 py-1"
                            >
                              <p className="hover:translate-x-1 main-trans">
                                {d.name}
                              </p>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-[1000] bg-accent text-white rounded-full p-3 shadow-lg hover:bg-accent-dark transition text-2xl"
        >
          ↑
        </button>
      )}
    </>
  );
}
