import { NavLink, useParams, useLocation } from "react-router-dom";
// import SimplePost from "./Posts/SimplePost";
// import BasicPost from "./Posts/BasicPost";
// import GalleryPost from "./Posts/GalleryPost";
// import QuotePost from "./Posts/QuotePost";
import { posts } from "./_Data/_Blog";
import MainTitle from "./MainTitle";
import postImage from "./assets/images/b9.jpg";
import FormContact from "./FormContact";
import { useEffect, useRef } from "react";
// for Images
import {
  FaAngleLeft,
  FaAngleRight,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import Slider from "./Slider";

export default function PostsPage() {
  const { type } = useParams();
  const textareaRef = useRef(null);

  // For Comment section navigation
  const location = useLocation();
  const commentRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#comment-section") {
      if (commentRef) commentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // const renderPost = () => {
  //   switch (type) {
  //     case "simple":
  //       return <SimplePost />;
  //     case "gallery":
  //       return <GalleryPost />;
  //     case "quote":
  //       return <QuotePost />;
  //     case "basic":
  //       return <BasicPost />;
  //     default:
  //       return <div>Post Type Doesn't Exist</div>;
  //   }
  // };

  const simplePost = posts.find((p) => p.category === type);
  const {
    id,
    title,
    author,
    extendedText,
    image,
    images,
    quote,
    comments,
    count,
  } = simplePost;

  return (
    <section id="post">
      <MainTitle title={title} subtitle={title} post={true} />
      <div className="container leading-[2] text-text normal-body">
        <div className="max-w-[820px] m-auto">
          <div className="flex flex-col gap-[30px] pt-[75px] pb-[30px] border-b border-black/10">
            {/* header */}
            {type === "simple" ? (
              <img
                className="w-fit h-auto object-cover aspect-[16/9] cursor-pointer"
                src={image}
                alt="Simple_Post"
                loading="lazy"
              />
            ) : type === "gallery" ? (
              <Slider images={images} ratio="16/9" id={id} />
            ) : type === "quote" ? (
              <div className="p-5 bg-accent text-white leading-[1.6] cursor-pointer main-trans hover:bg-[#333]">
                <p className="medium-body">{quote.text}</p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="text-sm">-{quote.author}</p>
                  <FaQuoteLeft className="opacity-60" />
                </div>
              </div>
            ) : (
              <></>
            )}
            {/* Extended Text */}
            <p className="">{extendedText}</p>
            {type !== "simple" && (
              <div className="flex flex-col gap-[10px]">
                <div className="w-[90%] mx-auto py-[10px] mb-[30px] px-[20px] border-l-2 border-black/10 bg-secondBg ">
                  <sup>
                    <FaQuoteLeft className="inline-block mr-1 text-footerText" />
                  </sup>
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsam. Nam liber tempor cum
                  soluta.
                  <sup>
                    <FaQuoteRight className="inline-block ml-1 text-footerText" />
                  </sup>
                </div>
                <p className="">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi. Nam liber tempor cum
                  soluta nobis eleifend option congue nihil imperdiet doming id
                  quod mazim. Claritas est etiam processus dynamicus, qui
                  sequitur mutationem consuetudium lectorum. Mirum est notare
                  quam littera gothica, quam nunc putamus parum claram,
                  anteposuerit litterarum formas humanitatis per seacula quarta
                  decima et quinta decima. Eodem modo typi, qui nunc nobis
                  videntur parum clari, fiant sollemnes in futurum. Mirum est
                  notare quam littera gothica, quam nunc putamus parum claram,
                  anteposuerit litterarum formas humanitatis per seacula quarta
                  decima et quinta decima. Eodem modo typi, qui nunc nobis
                  videntur parum clari, fiant sollemnes in futurum. Mirum est
                  notare quam littera gothica, quam nunc putamus parum claram,
                  anteposuerit litterarum formas humanitatis per seacula quarta
                  decima et quinta decima. Eodem modo typi, qui nunc nobis
                  videntur parum clari, fiant sollemnes in futurum.
                </p>
                <h4 className="text-title py-[10px] font-Alegreya">
                  Mirum Est Notare Quam Littera Gothica
                </h4>
                <div>
                  <p>
                    Mirum est notare quam littera gothica, quam nunc putamus
                    parum claram, anteposuerit litterarum formas humanitatis per
                    seacula quarta decima et quinta decima. Eodem modo typi, qui
                    nunc nobis videntur parum clari, fiant sollemnes in futurum.
                    Mirum est notare quam littera gothica, quam nunc putamus
                    parum claram, anteposuerit litterarum formas humanitatis per
                    seacula quarta decima et quinta decima. Eodem modo typi, qui
                    nunc nobis videntur parum clari, fiant sollemnes in futurum.
                    Lorem ipsum dolor sit amet,
                    <img
                      src={postImage}
                      alt="Post_Gallery"
                      loading="lazy"
                      className="max-sm:w-full sm:float-left py-5 sm:pr-5"
                    />
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros et accumsan et iusto
                    odio dignissim qui blandit praesent luptatum zzril delenit
                    augue duis dolore te feugait nulla facilisi. Nam liber
                    tempor cum soluta nobis eleifend option congue nihil
                    imperdiet doming id quod mazim placerat facer possim assum.
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamus parum claram,
                    anteposuerit litterarum formas humanitatis per seacula
                    quarta decima et quinta decima. Eodem modo typi, qui nunc
                    nobis videntur parum clari, fiant sollemnes in futurum.
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamus parum claram,
                    anteposuerit litterarum formas.
                  </p>
                  <div className="clear-both"></div>
                </div>
                {type === "basic" && (
                  <div className="w-full flex justify-center items-center py-5 gap-2">
                    <NavLink to="/blog" className="small-button">
                      Peace
                    </NavLink>
                    <NavLink to="/blog" className="small-button">
                      Yoga Class
                    </NavLink>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Author */}
          <div className=" py-5 border-b border-black/10 flex flex-col md:flex-row max-md:text-center items-center gap-5">
            <img
              src={author.image}
              alt={author.name}
              loading="lazy"
              className="rounded-full object-cover shadow-sm"
            />
            <div>
              <h3 className="medium-body text-title font-Alegreya">
                {author.name}
              </h3>
              <p className="">{author.text}</p>
            </div>
          </div>
          {/* Next Pervious */}
          <div className="w-full flex items-center py-5 border-b border-black/10">
            {count !== 0 && (
              <NavLink
                to={`/blog/post/${posts[count - 1].category}`}
                className="mr-auto cursor-pointer py-1 group"
              >
                <div className="flex gap-1 items-center">
                  <FaAngleLeft className="text-2xl group-hover:text-secondAccent main-trans" />
                  <div className="leading-[1.3]">
                    <p className="small-body text-footerText">Pervious Post</p>
                    <p className="text-title font-Alegreya normal-body group-hover:text-secondAccent main-trans">
                      {posts[count - 1].title}
                    </p>
                  </div>
                </div>
              </NavLink>
            )}
            {count + 1 < posts.length && (
              <NavLink
                to={`/blog/post/${posts[count + 1].category}`}
                className="ml-auto cursor-pointer py-1 group"
              >
                <div className="flex gap-1 items-center">
                  <div className="leading-[1.3]">
                    <p className="small-body text-footerText">Next Post</p>
                    <p className="text-title font-Alegreya normal-body group-hover:text-secondAccent main-trans">
                      {posts[count + 1].title}
                    </p>
                  </div>
                  <FaAngleRight className="text-2xl group-hover:text-secondAccent main-trans" />
                </div>
              </NavLink>
            )}
          </div>
          {/* Comments */}
          <div
            id="comment-section"
            ref={commentRef}
            className="border-b border-black/10 scroll-mt-[90px]"
          >
            <h4 className="text-title py-3 font-Alegreya">
              {comments.length} Comments
            </h4>
            {comments.map((comment) => (
              <div className=" py-5 [&:last-of-type]:border-none border-b border-black/10 flex items-center gap-5 w-full">
                <img
                  src={comment.image}
                  alt={comment.name}
                  loading="lazy"
                  className="w-[60px] rounded-full object-cover shadow-sm"
                />
                <div>
                  <h3 className="medium-body text-title font-Sans ">
                    {comment.name}{" "}
                    <span className="text-footerText small-body ml-1">
                      {comment.date}
                    </span>
                  </h3>
                  <p className="">{comment.text}</p>
                </div>
                <a
                  href="#comment-section"
                  onClick={() => {
                    setTimeout(() => textareaRef.current.focus(), 500);
                  }}
                  className="ml-auto small-body px-1 bg-black/5 main-trans hover:bg-accent rounded-sm hover:text-white text-title "
                >
                  Replay
                </a>
              </div>
            ))}
          </div>
          {/* Leave Comment Form*/}
          <div
            className="py-[30px] flex flex-col gap-[20px] scroll-mt-[100px]"
            id="comment-section"
          >
            <p className="text-title font-Alegreya">Leaver Comment</p>
            <p className="normal-body">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <FormContact ref={textareaRef} buttonText="POST COMMENT" />
          </div>
        </div>
      </div>
    </section>
  );
}
