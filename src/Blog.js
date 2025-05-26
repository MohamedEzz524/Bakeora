import MainBlog from "./MainBlog";
import PostsPage from "./PostsPage";
import { Routes, Route } from "react-router-dom";
import ArchivePage from "./ArchivePage";
import CategoriesPage from "./CategoriesPage";

export default function Blog() {
  return (
    <Routes>
      <Route path="/" element={<MainBlog />} />
      {/* no blog/post only blog/post/:type */}
      <Route path="post/:type" element={<PostsPage />} />
      <Route path="archive" element={<ArchivePage />} />
      <Route path="archive/:date" element={<ArchivePage />} />
      <Route path="category" element={<CategoriesPage />} />
      <Route path="category/:category" element={<CategoriesPage />} />
    </Routes>
  );
}
