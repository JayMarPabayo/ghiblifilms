import { FilmsContext } from "./Layout";
import { useLocation, useParams } from "react-router-dom";
import { useContext } from "react";

const Film = () => {
  const films = useContext(FilmsContext);
  const { pathTitle } = useParams();
  const location = useLocation();

  const film = films.find(
    (film) => film.title === convertToTitleCase(pathTitle)
  );
  const {
    title,
    kanji,
    year,
    director,
    runtime,
    figure,
    poster,
    header,
    body,
  } = film;
  return <div className="w-full text-black">{title}</div>;
};

function convertToTitleCase(str) {
  const words = str.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const titleCaseStr = capitalizedWords.join(" ");
  return titleCaseStr;
}

export default Film;
