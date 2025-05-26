import { useEffect, useRef, useState } from "react";

export default function Slider({ images, ratio, id }) {
  const [currentIndex, setCurrentIndex] = useState(1); // start from 1 (because of cloned first)
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef(null);
  const deltaX = useRef(0);
  const startX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const swipeThreshold = 30; // swipe distance to trigger slide

  // Clone first & last
  const extendedImages = [
    images[images.length - 1], // last image clone at start
    ...images,
    images[0], // first image clone at end
  ];

  const updatePosition = (index, withTransition = true) => {
    if (trackRef.current) {
      trackRef.current.style.transition = withTransition
        ? "transform 0.3s ease"
        : "none";
      trackRef.current.style.transform = `translateX(-${index * 100}%)`;
      setCurrentIndex(index);
    }
  };

  // Initialize position
  useEffect(() => {
    updatePosition(currentIndex, false);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;
    updatePosition(currentIndex, true);

    const handleTransitionEnd = () => {
      if (currentIndex === 0) {
        // jump to real last
        updatePosition(images.length, false);
      } else if (currentIndex === images.length + 1) {
        // jump to real first
        updatePosition(1, false);
      }
      setIsAnimating(false);
    };

    const trackNode = trackRef.current;
    trackNode.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      trackNode.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, isAnimating, images]);

  //
  const handelMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX || e.touches[0].clientX;
  };

  //
  const handleMouseMove = (e) => {
    if (!isDragging || isAnimating) return;
    const currentX = e.clientX || e.touches[0].clientX;
    deltaX.current = currentX - startX.current;
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(calc(-${
        currentIndex * 100
      }% + ${deltaX.current}px))`;
    }
  };

  const handelMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(deltaX.current) > swipeThreshold) {
      if (deltaX.current > 0) {
        // swipe right
        setIsAnimating(true);
        setCurrentIndex((prev) => prev - 1);
      } else {
        // swipe left
        setIsAnimating(true);
        setCurrentIndex((prev) => prev + 1);
      }
    } else {
      // not enough → snap back
      updatePosition(currentIndex, true);
    }
    deltaX.current = 0;
    startX.current = 0;
  };

  return (
    <div className="relative w-full overflow-hidden no-select">
      <div
        style={{ aspectRatio: `${ratio}` }}
        className={`w-full h-full flex  ${isDragging ? "cursor-grabbing" : ""}`}
        ref={trackRef}
        onMouseDown={handelMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handelMouseUp}
        onMouseLeave={handelMouseUp}
        onTouchStart={handelMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handelMouseUp}
      >
        {/* Shown */}
        {extendedImages.map((img, i) => (
          <img
            key={`${id}-${i}`}
            className="w-full flex-shrink-0 object-cover "
            src={img}
            alt={`Gallery ${i}`}
            loading="lazy"
            draggable={false} // prevents dragging img element itself
          />
        ))}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[10px] flex justify-center items-center gap-[10px]">
        {images.map((_, i) => (
          <div
            key={i}
            className={`bullet-style ${currentIndex - 1 === i ? "active" : ""}`}
            onClick={() => updatePosition(i + 1)}
          ></div>
        ))}
      </div>
    </div>
  );
}

// use memo if only images will changes by time in the prop in blog.js
// const extendedImages = useMemo(
//   () => [images[images.length - 1], ...images, images[0]],
//   [images]
// );
