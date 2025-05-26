import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaEarthAfrica,
  FaFacebook,
  FaGooglePlusG,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const footerSpecial = [
  { id: "footer1", text: "Our magical recipe." },
  { id: "footer2", text: "We care about environment." },
  { id: "footer3", text: "We are trusted by hundreds of clients." },
  { id: "footer4", text: "Social media loves us!" },
  { id: "footer5", text: "This list is super easy to create." },
];

const footerOpening = [
  { id: "opening1", text: "Monday 10AM - 9PM" },
  { id: "opening2", text: "Tuesday 10AM - 9PM" },
  { id: "opening3", text: "Wednesday 10AM - 9PM" },
  { id: "opening4", text: "Thursday 10AM - 9PM" },
  { id: "opening5", text: "Friday 10AM - 9PM" },
  { id: "opening6", text: "Weekends 10AM - 9PM" },
];

const footerContact = [
  {
    id: "fContact1",
    icon: <FaLocationDot />,
    text: "Manchester Road 123-78B, Silictown 7854MD, Great Country",
  },
  {
    id: "fContact2",
    icon: <FaPhone />,
    text: "+46 123 456 789",
  },
  {
    id: "fContact3",
    icon: <FaEnvelope />,
    text: (
      <a
        href="mailto:moelsayed524@gmail.com?subject=Contact>hello@sitename.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-white main-trans"
      >
        hello@sitename.com
      </a>
    ),
  },
  {
    id: "fContact4",
    icon: <FaEarthAfrica />,
    text: (
      <a
        href="http://www.sitename.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-white main-trans"
      >
        http://www.sitename.com
      </a>
    ),
  },
];

export const footerData = [
  { id: "footerData1", title: "Why we are special?", data: footerSpecial },
  { id: "footerData2", title: "Opening Hours", data: footerOpening },
  { id: "footerData3", title: "Contact Details", data: footerContact },
];

export const footerLinks = [
  {
    id: "facebook",
    href: "http://www.facebook.com",
    icon: <FaFacebook className="text-2xl" />,
    color: "#1877F2",
  },
  {
    id: "google+",
    href: "http://www.googleplus.com",
    icon: <FaGooglePlusG className="text-2xl" />,
    color: "#DB4437",
  },
  {
    id: "linkedin",
    href: "http://www.linkedin.com",
    icon: <FaLinkedin className="text-2xl" />,
    color: "#0A66C2",
  },
  {
    id: "twitter",
    href: "http://www.twitter.com",
    icon: <FaTwitter className="text-2xl" />,
    color: "#1DA1F2",
  },
];
