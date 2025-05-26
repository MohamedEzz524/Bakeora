import { FaAngleRight } from "react-icons/fa";
export default function DrawLi({ data, color, type }) {
  return (
    <div className="flex flex-col gap-[5px]">
      {data.map(({ id, icon, text }) => (
        <div
          key={id}
          className={`flex items-center gap-[5px] py-2 ${
            !data[icon] ? " border-white/10 [&:not(:last-child)]:border-b" : ""
          }`}
        >
          {icon ? (
            <span
              style={{ background: color }}
              className={` p-2 rounded-full shadow-md ${
                color === "white" ? "border border-black/20 " : "mr-[10px]"
              }`}
            >
              {icon}
            </span>
          ) : (
            <FaAngleRight
              className={`${
                type === "link"
                  ? "text-xs text-subtitle cursor-pointer"
                  : "text-sm"
              }`}
            />
          )}
          <p
            className={`${
              type === "link"
                ? "text-sm text-subtitle cursor-pointer main-trans hover:text-accent"
                : ""
            }`}
          >
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}
