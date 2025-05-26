import simpleImg from "../assets/images/how33.jpg";
import galleryImg1 from "../assets/images/location11.jpg";
import galleryImg2 from "../assets/images/home_about11.jpg";
import galleryImg3 from "../assets/images/about-11.jpg";
import galleryImg4 from "../assets/images/how11.jpg";
import { NavLink } from "react-router-dom";
import commentImage1 from "../assets/images/b8.png";

export const posts = [
  {
    count: 0,
    id: "simple1",
    title: "Simple Post",
    archive: "April2017",
    author: {
      name: "Philip",
      image: commentImage1,
      date: "April 22, 2017",
      text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis. ",
    },
    text: "Contrary to popular belief, Lorem Ipsum isn’t simply random text. It has roots in Virginia Contrary piece of classical Latin literature from 45 BC, making...",
    extendedText: (
      <>
        Contrary to popular belief, Lorem Ipsum isn’t simply random text. It has
        roots in Virginia Contrary piece of classical Latin literature from 45
        BC, making it over 2000 years old. Richard McClintock, a Latin professor
        at Hampden-Sydney College in Virginia Contrary to popular belief, Lorem
        Ipsum is not simply random text. It has roots in a piece of classical
        Latin literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia Contrary to popular belief, Lorem
        Ipsum is not simply random text. It has roots in a piece of classical
        Latin literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia
        <br className="block mt-5" />
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia
        <br className="block mt-5" />
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia
      </>
    ),
    image: simpleImg,
    comments: [
      {
        id: "com1",
        name: "Sayed",
        date: "April 22, 2017",
        text: "Wow, I love this simple post! Thanks for the information!",
        image: commentImage1,
      },
      {
        id: "com2",
        name: "Mohamed",
        date: "April 22, 2017",
        text: "Wow, I love this simple post again! Thanks for the information!",
        image: commentImage1,
      },
      {
        id: "com3",
        name: "Magdy",
        date: "April 12, 2017",
        text: "Wow, I love this simple post again! Thanks for the information!",
        image: commentImage1,
      },
    ],
    type: "Photography",
    category: "simple",
  },

  {
    count: 1,
    id: "basic1",
    archive: "March2017",
    title: "Basic Post",
    author: {
      name: "Ali",
      image: commentImage1,
      date: "March 22, 2017",
      text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis. ",
    },
    text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros...",
    extendedText:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    comments: [],
    type: "Classes",
    category: "basic",
  },

  {
    count: 2,
    id: "gallery1",
    archive: "April2017",
    title: "Gallery Post",
    author: {
      name: "Dahy",
      image: commentImage1,
      date: "April 22, 2017",
      text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis. ",
    },
    text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros...",
    extendedText:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    images: [galleryImg1, galleryImg2, galleryImg3, galleryImg4],
    comments: [
      {
        id: "com1",
        name: "Dahy",
        date: "April 22, 2017",
        text: "Wow, I love this gallery post! Thanks for the information!",
        image: commentImage1,
      },
    ],
    type: "Travel",
    category: "gallery",
  },

  {
    count: 3,
    id: "quote1",
    archive: "March2017",
    title: "Quote Post",
    author: {
      name: "Bakeora",
      image: commentImage1,
      date: "March 22, 2017",
      text: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis. ",
    },
    text: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros...",
    extendedText:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",
    quote: {
      author: "Albert Einstein",
      text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    },
    comments: [
      {
        id: "com1",
        name: "Hosny",
        date: "March 29, 2017",
        text: "Wow, I love this quote post! Thanks for the information! ",
        image: commentImage1,
      },
      {
        id: "com2",
        name: "Wael",
        date: "May 3, 2017",
        text: "Wow, I love this quote post! Thanks for the information! ",
        image: commentImage1,
      },
    ],
    type: "Classes",
    category: "quote",
  },
];

const recentPosts = [
  {
    id: "recent1",
    text: <NavLink to="/blog/post/simple">Simple Post</NavLink>,
  },
  {
    id: "recent2",
    text: <NavLink to="/blog/post/gallery">Gallery Post</NavLink>,
  },
  { id: "recent3", text: <NavLink to="/blog/post/basic">Basic Post</NavLink> },
  { id: "recent4", text: <NavLink to="/blog/post/quote">Quote Post</NavLink> },
];
const recentComments = [
  {
    id: "comment1",
    text: (
      <NavLink to="/blog/post/simple#comment-section">
        Sayed on Simple Post
      </NavLink>
    ),
  },
  {
    id: "comment2",
    text: (
      <NavLink to="/blog/post/gallery#comment-section">
        Dahy on Gallery Post
      </NavLink>
    ),
  },
  {
    id: "comment3",
    text: (
      <NavLink to="/blog/post/quote#comment-section">
        Hosny on Quote Post
      </NavLink>
    ),
  },
];

export const archives = [
  {
    id: "archive1",
    title: "April 2017",
    text: <NavLink to="/blog/archive/April2017">April 2017</NavLink>,
  },
  {
    id: "archive2",
    title: "March 2017",
    text: <NavLink to="/blog/archive/March2017">March 2017</NavLink>,
  },
];

export const categories = [
  {
    id: "categories1",
    title: "Classes",
    text: <NavLink to="/blog/category/Classes">Classes</NavLink>,
  },
  {
    id: "categories2",
    title: "Photography",
    text: <NavLink to="/blog/category/Photography">Photography</NavLink>,
  },
  {
    id: "categories3",
    title: "Travel",
    text: <NavLink to="/blog/category/Travel">Travel</NavLink>,
  },
];

export const navigation = [
  { id: "navigation1", title: "Recent Posts", data: recentPosts },
  { id: "navigation2", title: "Recent Comments", data: recentComments },
  {
    id: "navigation3",
    title: (
      <div className="flex justify-between items-center">
        <h3>Archive</h3>
        <NavLink to="/blog/archive" className="small-button font-Sans">
          View All
        </NavLink>
      </div>
    ),
    data: archives,
  },
  {
    id: "navigation4",
    title: (
      <div className="flex justify-between items-center">
        <h3>Categories</h3>
        <NavLink to="/blog/category" className="small-button font-Sans">
          View All
        </NavLink>
      </div>
    ),
    data: categories,
  },
];
