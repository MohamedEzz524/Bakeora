import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search({ size, border = false }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // if (search.trim()) {
    navigate(`/search?q=${encodeURIComponent(search)}`);
    // } else {
    //   alert("Please enter a search term.");
    // }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      setSearch("");
    }
  };

  return (
    <div
      style={{ width: `${size}%` }}
      className={`text-footerText relative normal-body pb-5 ${
        border ? "border-b border-black/10" : ""
      }`}
    >
      <input
        id="input-search"
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full py-[10px] pl-[10px] pr-[40px] outline-none focus:border-accent border-2 border-black/10"
      />
      <button
        onClick={handleSearch}
        className="absolute right-[8px] top-[calc(50%-10px)] -translate-y-1/2 "
      >
        <CiSearch className="text-3xl main-trans hover:text-title cursor-pointer" />
      </button>
    </div>
  );
}
