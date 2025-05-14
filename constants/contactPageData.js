import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+20) 1007075312",
    action: "call",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Aelzyat25@gmail.com",
    action: "email",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Egypt, Cairo",
    action: "location",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "Connect with me on LinkedIn",
    action: "linkedin",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    description: "Check out my GitHub",
    action: "github",
  },
];

export default info;
