import React from "react";
import AsideSection from "./AsideSection";
import { useParams } from "react-router-dom";
import MainTitle from "./MainTitle";
import Post from "./Post";
import { posts, archives } from "./_Data/_Blog";
import NothingFound from "./NothingFound";
import List from "./List";

export default function ArchivePage() {
  const { date } = useParams();
  const filteredArchive = posts.filter((e) => e.archive === date);
  return (
    <section id="archive" className="font-Sans">
      <MainTitle
        title="Archives"
        subtitle={`Archives ${date ? `/ ${date}` : ""}`}
        archive={true}
      />
      <div className="container py-[60px] flex flex-col justify-between lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-[72%]  gap-5 ">
          {date ? (
            filteredArchive.length === 0 ? (
              <NothingFound path="archive" view="Archives" />
            ) : (
              filteredArchive.map((post) => (
                <div key={post.id} className="mb-5 w-full break-inside-avoid">
                  <Post data={post} />
                </div>
              ))
            )
          ) : (
            <List type="Date" data={archives} />
          )}
        </div>
        {/* Right Section */}
        <AsideSection />
      </div>
    </section>
  );
}
