import { useEffect, useRef, useState } from "react";
import MainTitle from "./MainTitle";
import { gallery } from "./_Data/_gallery";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function Gallery() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const popup = useRef(null);

  const handleOverlay = (i) => {
    setShowOverlay(true);
    setCurrentIndex(i);
    document.documentElement.style.overflow = "hidden";
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };
  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? gallery.length - 1 : (prev - 1) % gallery.length
    );
  };
  const closeOverlay = () => {
    setShowOverlay(false);
    document.documentElement.style.overflow = "auto";
  };

  // Preload next and previous images
  useEffect(() => {
    setIsLoading(true);
    const preload = (i) => {
      const img = new Image();
      img.src = gallery[i];
    };

    preload((currentIndex + 1) % gallery.length);
    preload((currentIndex - 1 + gallery.length) % gallery.length);
  }, [currentIndex]);

  // Close overlay when clicking outside
  useEffect(() => {
    if (!showOverlay) return;
    const handleClickOutside = (e) => {
      if (popup.current && !popup.current.contains(e.target)) {
        closeOverlay();
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "Escape") closeOverlay();
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOverlay]);

  // Future Enhancement: Extract overlay view into a separate component
  // Benefit: Cleaner structure and easier to reuse or manage logic (transitions, animations, keyboard nav, etc.)

  return (
    <section id="gallery" className="relative">
      <MainTitle
        title="Gallery"
        subtitle="Awesome gallery showcasing our artisan bakings."
      />
      <div className="subsection">
        <div className="container">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] md:gap-2">
            {gallery.map((imgSrc, i) => (
              <div
                key={`gal${i}`}
                className="relative group overflow-hidden cursor-pointer"
                onClick={() => handleOverlay(i)}
              >
                <img
                  src={imgSrc}
                  alt="Gallery"
                  loading="lazy"
                  className="w-full aspect-square max-sm:h-auto object-cover group-hover:scale-110 main-trans"
                />
                <span className="absolute inset-full group-hover:inset-0 bg-black/30 "></span>
                <CiSearch className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white main-trans opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {showOverlay && (
        <div className="fixed inset-0 bg-black/50 z-[1000] overflow-auto ">
          <div
            className="absolute flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-fit shadow-lg"
            ref={popup}
          >
            {/* Navigation Arrows */}
            <div
              className="absolute right-[2%] top-1/2 -translate-y-1/2 w-[40px] group h-[40px] z-[1] cursor-pointer main-trans active:translate-x-[2px] shadow-xl"
              onClick={handleNext}
            >
              <div className="absolute inset-0 arrow-outer main-trans group-hover:bg-[rgba(255,255,255,1)]"></div>
              <div className="absolute left-[15%] top-[25%] arrow-inner main-trans group-hover:bg-[rgba(0,0,0,0.9)]"></div>
            </div>
            {/* Image */}
            <img
              src={gallery[currentIndex]}
              alt="ZOOMED_PHOTO"
              loading="lazy"
              className={`relative w-full h-auto object-cover transition-opacity duration-700 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              // onLoad={(e) => (e.currentTarget.style.opacity = 1)}
              onLoad={() => setIsLoading(false)}
            />
            {/* Previous Button */}
            <div
              className="absolute left-[2%] top-1/2 group -translate-y-1/2 w-[40px] h-[40px] z-[1] rotate-[180deg] cursor-pointer main-trans active:-translate-x-[2px] shadow-xl "
              onClick={handlePrevious}
            >
              <div className="absolute inset-0 arrow-outer main-trans group-hover:bg-[rgba(255,255,255,1)] "></div>
              <div className="absolute left-[15%] top-[25%] arrow-inner main-trans group-hover:bg-[rgba(0,0,0,0.9)]"></div>
            </div>
            {/* Close Button */}
            <IoCloseOutline
              onClick={closeOverlay}
              className="absolute text-3xl right-0 top-0 -translate-y-full cursor-pointer text-black/40 hover:text-black/20 "
            />
          </div>
          {/* Loader */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-[2]">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
