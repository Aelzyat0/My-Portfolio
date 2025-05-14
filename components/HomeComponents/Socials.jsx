import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaReddit,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Aelzyat0" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ahmed-fathy-997aa534b/",
  },
  { icon: <FaReddit />, path: "https://www.reddit.com/user/Aa7010/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/" },
  { icon: <FaFacebook />, path: "https://facebook.com/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
