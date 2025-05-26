import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function NothingFound({ path, view }) {
  return (
    <div className="w-full">
      <p className="text-title font-Alegreya title-body mb-5">Nothing found.</p>
      <p className="text-text medium-body mb-4">
        Sorry, but nothing matches your search criteria. Please try again with
        some different keywords.
      </p>
      <NavLink
        to={`/blog/${path}`}
        className="text-title flex items-center gap-2 group hover:text-accent w-fit"
      >
        <FaArrowLeft />
        <p className="underline">View all {view}</p>
      </NavLink>
    </div>
  );
}
