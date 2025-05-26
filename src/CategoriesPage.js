import { useParams } from "react-router-dom";
import { posts, categories } from "./_Data/_Blog";
import Post from "./Post";
import React from "react";
import AsideSection from "./AsideSection";
import MainTitle from "./MainTitle";
import NothingFound from "./NothingFound";
import List from "./List";

export default function CategoriesPage() {
  const { category } = useParams();
  const filteredCategory = posts.filter((e) => e.type === category);

  return (
    <section id={`${category}`} className="font-Sans">
      <MainTitle
        title="Archives"
        subtitle={
          <>
            Archives{"\u00A0"} / {"\u00A0"}Posts by category {"\u00A0"}
            {category && `"${category}"`}
          </>
        }
        archive={true}
      />
      <div className="container py-[60px] flex flex-col justify-between lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-[72%]  gap-5 ">
          {category ? (
            filteredCategory.length === 0 ? (
              <NothingFound path="category" view="Categories" />
            ) : (
              filteredCategory.map((post) => (
                <div key={post.id} className="mb-5 w-full break-inside-avoid">
                  <Post data={post} />
                </div>
              ))
            )
          ) : (
            <List type="Category" data={categories} />
          )}
        </div>
        {/* Right Section */}
        <AsideSection />
      </div>
    </section>
  );
}
