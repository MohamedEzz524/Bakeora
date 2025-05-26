import MainTitle from "./MainTitle";
import { posts } from "./_Data/_Blog";
import Post from "./Post";
import AsideSection from "./AsideSection";

export default function MainBlog() {
  return (
    <section id="blog" className="font-Sans">
      <MainTitle title="Blog" subtitle="Blog" />
      <div className="container py-[60px] flex flex-col justify-between lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-[72%] columns-1 md:columns-2 lg:columns-1 xl:columns-2 gap-5 ">
          {posts.map((post) => (
            <div key={post.id} className="mb-5 w-full break-inside-avoid">
              <Post data={post} />
            </div>
          ))}
        </div>
        {/* Right Section */}
        <AsideSection />
      </div>
    </section>
  );
}
