import { AiFillLike } from "react-icons/ai";
import { FaLightbulb, FaBuilding, FaUsers } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { IoChatbubble } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { GiChefToque, GiSoap } from "react-icons/gi";

export const aboutOurBacking = [
  {
    id: "about1",
    title: "Facilities",
    icon: <FaBuilding className="-rotate-45" />,
    text: "Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.",
  },
  {
    id: "about2",
    title: "Best Equipment",
    icon: <GiChefToque className="-rotate-45" />,
    text: "Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.",
  },
  {
    id: "about3",
    title: "Incredible Location",
    icon: <MdLocationOn className="-rotate-45" />,
    text: "Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.",
  },
  {
    id: "about4",
    title: "Premium Support",
    icon: <MdSupportAgent className="-rotate-45" />,
    text: "Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.",
  },
  {
    id: "about5",
    title: "Incredible Team",
    icon: <FaUsers className="-rotate-45" />,
    text: "Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.",
  },
  {
    id: "about6",
    title: "Clean Space",
    icon: <GiSoap className="-rotate-45" />,
    text: "Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.",
  },
];

export const aboutRecords = [
  { id: "aRecord1", icon: <AiFillLike />, text: "Page Likes", record: 1430 },
  { id: "aRecord2", icon: <FaShop />, text: "Locations", record: 64 },
  { id: "aRecord3", icon: <FaLightbulb />, text: "Great Ideas", record: 960 },
  { id: "aRecord4", icon: <IoChatbubble />, text: "Comments", record: 420 },
];
