import { AnimatedSection } from "./AnimatedSection";
import DrawLi from "./DrawLi";

export default function Subsection({
  bg,
  dir,
  title,
  img,
  text1,
  text2,
  separation = false,
  data = false,
  dataColor,
  dataDescription,
}) {
  return (
    <div className={`${bg === "white" ? "bg-bg" : "bg-secondBg"} subsection`}>
      <div className="container">
        <div
          className={`flex ${
            dir === "right" ? "flex-row-reverse" : "flex-row"
          } max-md:flex-col md:gap-[4%] gap-[50px]`}
        >
          {/* Image */}
          {img && (
            <img
              src={img}
              alt="location_photo"
              className="max-md:w-full w-[48%] h-full my-auto object-cover"
            />
          )}
          {/* Ul */}
          <AnimatedSection
            delay={0.2}
            className="w-[48%] max-md:w-full max-md:px-0 px-2 my-auto"
          >
            <div className=" w-full space-y-5 text-text normal-body">
              <h3 className="title-style">{title}</h3>
              {text1 && (
                <p
                  className={`mb-5 leading-[2] ${
                    separation ? "medium-body leading-[1.8]" : "normal-body"
                  }`}
                >
                  {text1}
                </p>
              )}
              {separation && (
                <div className="w-[50px] h-[1px] bg-black/5"></div>
              )}
              {text2 && <p className="leading-[2]">{text2}</p>}
              {data && (
                <div>
                  {dataDescription && (
                    <p className="mb-[20px]">{dataDescription}</p>
                  )}
                  <DrawLi data={data} color={dataColor} />
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
