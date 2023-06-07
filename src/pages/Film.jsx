import { FilmsContext } from "./Layout";
import { useParams } from "react-router-dom";
import { useContext } from "react";

const Film = () => {
  const films = useContext(FilmsContext);
  const { pathTitle } = useParams();

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
  return (
    <div className="w-full text-black relative">
      <div className="w-full overflow-hidden relative bg-red-300">
        <img
          src={figure}
          className="fixed inset-0 -z-20 h-full w-full object-cover object-bottom"
        />
        <div className="fixed inset-0 bg-black bg-opacity-70 -z-10">
          <main className="h-full flex bg-red-50 bg-opacity-10 mt-32"></main>
        </div>
      </div>
    </div>
  );
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
