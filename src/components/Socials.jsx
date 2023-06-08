import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { FiGlobe } from "react-icons/fi";

const Socials = () => {
  const LinkStyles =
    "rounded-full p-1 border-black border-2 hover:scale-105 hover:bg-[#a89e7f] transition-all duration-300";
  return (
    <nav className="flex w-full items-center justify-center gap-2 text-black ">
      <Link
        to="https://twitter.com/ghibliusa?lang=en"
        className={LinkStyles}
        target="_blank"
      >
        <GrTwitter />
      </Link>
      <Link
        to="https://www.instagram.com/ghibli.movies/?hl=en"
        className={LinkStyles}
        target="_blank"
      >
        <AiFillInstagram />
      </Link>
      <Link to="https://www.ghibli.jp/" className={LinkStyles} target="_blank">
        <FiGlobe />
      </Link>
    </nav>
  );
};

export default Socials;
