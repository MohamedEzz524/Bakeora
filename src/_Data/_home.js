import {
  FaLeaf,
  FaUsers,
  FaHeart,
  FaCheck,
  FaMap,
  FaPhone,
  FaHeadphones,
  FaEnvelope,
} from "react-icons/fa";
import how1 from "../assets/images/how1.jpg";
import how2 from "../assets/images/how2.jpg";
import how3 from "../assets/images/how3.jpg";

export const aboutUs = [
  {
    id: "aboutUs1",
    icon: <FaLeaf className="text-accent text-2xl" />,
    text: "We care about environment.",
  },
  {
    id: "aboutUs2",
    icon: <FaUsers className="text-accent text-2xl" />,
    text: "We are trusted by hundreds of clients.",
  },
  {
    id: "aboutUs3",
    icon: <FaHeart className="text-accent text-2xl" />,
    text: "Social media loves us!",
  },
  {
    id: "aboutUs4",
    icon: <FaCheck className="text-accent text-2xl" />,
    text: "This list is super easy to create.",
  },
];

export const ourBacking = [
  {
    id: "ourBacking1",
    image: how1,
    title: "Superior Breads",
    desc: "Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere.",
  },
  {
    id: "ourBacking2",
    image: how2,
    title: "Bagels",
    desc: "Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere.",
  },
  {
    id: "ourBacking3",
    image: how3,
    title: "Cookies",
    desc: "Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero, at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere.",
  },
];

export const contactInfo = [
  {
    id: "aboutUs1",
    icon: <FaMap className="text-white bg-accent text-2xl" />,
    text: "Manchester St 123-78B, Random 713, UK",
  },
  {
    id: "aboutUs2",
    icon: <FaPhone className="text-white bg-accent text-2xl" />,
    text: "+20 123 456 789",
  },
  {
    id: "aboutUs3",
    icon: <FaHeadphones className="text-white bg-accent text-2xl" />,
    text: "+20 123 456 789",
  },
  {
    id: "aboutUs4",
    icon: <FaEnvelope className="text-white bg-accent text-2xl" />,
    text: "hello@sitename.com",
  },
];
