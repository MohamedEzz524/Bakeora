import { useSearchParams, useNavigate } from "react-router-dom";
import { search } from "./_Data/_search";
import Post from "./Post";
import React from "react";
import AsideSection from "./AsideSection";
import MainTitle from "./MainTitle";
import Search from "./SearchInput";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function CategoriesPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const key = searchParams.get("q");
  // get page it provided if not 1
  const page = parseInt(searchParams.get("page")) || 1;
  // Items Per Page
  const itemsPerPage = 8;
  // start and end index of each page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtering search based on key
  const filteredCategory = search.filter((e) => {
    return RegExp(key, "ig").test(e.search);
  });

  // Pages
  const totalPages = Math.ceil(filteredCategory.length / itemsPerPage);

  // Select items per page
  const paginatedResults = filteredCategory.slice(startIndex, endIndex);

  return (
    <section className="font-Sans">
      <MainTitle
        title="Search Result"
        subtitle={
          <>
            {"\u00A0"}Search result for {"\u00A0"}"{key}"
          </>
        }
        search={true}
      />
      <div className="container py-[60px] flex flex-col justify-between lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-[72%]">
          {/* Handle Not Found */}
          {filteredCategory.length === 0 || page > totalPages ? (
            <div>
              <p className="text-title font-Alegreya title-body mb-5">
                Nothing found.
              </p>
              <p className="text-text medium-body mb-4">
                Sorry, but nothing matches your search criteria. Please try
                again with some different keywords.
              </p>
              <Search size={50} />
            </div>
          ) : (
            <div>
              {/* show items per page */}
              {paginatedResults.map((search) => (
                <div key={search.id} className="mb-5 w-full break-inside-avoid">
                  {search.type === "post" ? (
                    <Post data={search} />
                  ) : (
                    <div className="bg-white rounded-xl shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {search.title}
                      </h3>
                      <p className="text-[#8e7754] font-medium hover:underline">
                        {search.link}
                      </p>
                    </div>
                  )}
                </div>
              ))}
              <div className="flex gap-5 py-5 w-full h-full">
                {page > 1 && (
                  <button
                    disabled={page <= 1}
                    onClick={() => navigate(`?q=${key}&page=${page - 1}`)}
                    className={`px-4 py-2 text-white flex items-center gap-2 ${
                      page <= 1
                        ? "bg-[#333] cursor-not-allowed"
                        : "bg-accent hover:bg-[#333]"
                    }  main-trans `}
                  >
                    <FaAngleLeft />
                    Perv
                  </button>
                )}
                {totalPages > 1 && (
                  <div className="flex gap-2 items-center justify-center">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <div
                        onClick={() => navigate(`?q=${key}&page=${i + 1}`)}
                        className={`w-8 h-full tracking-tight text-center content-center border border-accent main-trans ${
                          i + 1 === page
                            ? "bg-accent text-white"
                            : "bg-transparent hover:bg-accent hover:text-white cursor-pointer "
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                )}
                {page < totalPages && (
                  <button
                    onClick={() => navigate(`?q=${key}&page=${page + 1}`)}
                    className={`px-4 py-2 text-white flex items-center gap-2 ${
                      page >= totalPages
                        ? "bg-[#333] cursor-not-allowed"
                        : "bg-accent hover:bg-[#333]"
                    }  main-trans `}
                  >
                    Next
                    <FaAngleRight />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        {/* Right Section */}
        <AsideSection />
      </div>
    </section>
  );
}
