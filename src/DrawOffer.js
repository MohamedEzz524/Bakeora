export default function DrawOffer({ offer, border = false }) {
  const {
    title,
    text,
    price = false,
    icon = false,
    type = false,
    color,
  } = offer;
  return (
    <div
      className={`flex flex-col gap-5 leading-loose  ${
        border
          ? "shadow-[0_4px_8px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] pt-5"
          : "hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)] shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] pt-8"
      } main-trans px-5 pb-5  rounded-2xl group backdrop-blur-sm bg-white`}
    >
      {border && type && (
        <div
          style={{ background: color }}
          className={`absolute top-0 left-0 -rotate-1 px-2 py-1 text-xs rounded-full uppercase font-bold tracking-wide backdrop:blur-md  text-white`}
        >
          {type}
        </div>
      )}
      {icon && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-accent main-trans text-4xl p-3 bg-white border-8 group-hover:bg-accent group-hover:text-white border-secondBg  rotate-45">
          {icon}
        </div>
      )}
      <div
        className={`${
          price ? "flex justify-between items-center " : ""
        } border-b border-black/5 relative  
        `}
      >
        <h4
          className={`text-title medium-body group-hover:translate-x-2 group-hover:text-accent main-trans`}
        >
          {title}
        </h4>
        {price && (
          <>
            <p className="text-white z-[1] normal-body ">{price}</p>
            <span className="absolute -right-[5px] -top-5 w-[30px] h-[calc(100%+50px)] main-trans price-holder z-0 bg-gradient-to-b from-title to-accent"></span>
          </>
        )}
      </div>
      <p className="normal-body text-text">{text}</p>
    </div>
  );
}
