import { FilmsContext } from "./Layout";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { GiSandsOfTime, GiFilmSpool, GiCalendar } from "react-icons/gi";
import { TbArrowBackUp } from "react-icons/tb";
import { motion } from "framer-motion";

// -- stores
import amazon from "../assets/stores/amazon.png";
import fetch from "../assets/stores/fetch.png";
import googleplay from "../assets/stores/googleplay.png";
import itunes from "../assets/stores/itunes.png";
import ms from "../assets/stores/ms.png";

const Film = () => {
  const [spanFilms, setSpanFilms] = useState(false);
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
    digitalStore,
  } = film;
  return (
    <div className="w-full h-full text-black relative">
      <div className="w-full max-h-96 relative bg-red-300">
        <img
          src={figure}
          className="fixed inset-0 -z-20 h-full w-full object-cover object-bottom"
        />
        <div className="fixed inset-0 bg-black bg-opacity-80 -z-10">
          <main className="h-full flex flex-col bg-red-50 bg-opacity-10 mt-32 px-32 pt-2">
            <div className="h-96 w-full flex gap-2">
              <figure className="w-80 h-full">
                <img
                  src={poster}
                  alt={`${title} Poster`}
                  className="opacity-80 h-full w-full object-contain"
                />
              </figure>
              <article className="w-full h-full text-center pt-2 text-white">
                <section className="flex h-full flex-col justify-start gap-5">
                  <section>
                    <h1 className="text-3xl font-semibold tracking-wider">
                      {title}
                    </h1>
                    <h2 className="text-base font-bold tracking-wider opacity-90 mt-2 text-[#aca07e]">
                      {kanji}
                    </h2>
                  </section>
                  <h1 className="text-2xl font-medium mt-5">{header}</h1>
                  <p className="text-base opacity-90 my-auto flex-1">{body}</p>
                  <ul className="text-base opacity-90 flex justify-center items-center gap-4">
                    <li className="flex items-center gap-1">
                      <GiFilmSpool /> {director}
                    </li>
                    <li className="flex items-center gap-1">
                      <GiCalendar /> {year}
                    </li>
                    <li className="flex items-center gap-1">
                      <GiSandsOfTime /> {runtime}
                    </li>
                  </ul>
                </section>
              </article>
            </div>
            <div className="w-full h-48 flex justify-between gap-2 items-center">
              <Link
                to="#"
                onClick={() => {
                  window.history.back();
                }}
                className="flex gap-2 items-center p-3 text-sm bg-red-50 bg-opacity-60 hover:opacity-100 rounded-full  duration-300 transition-all"
                onMouseEnter={() => setSpanFilms(true)}
                onMouseLeave={() => setSpanFilms(false)}
              >
                <TbArrowBackUp />
                {spanFilms && (
                  <motion.span
                    className="font-semibold "
                    initial={{ scaleX: 0, transformOrigin: "left" }} // Start from the left
                    animate={{
                      scaleX: 1,
                      transition: {
                        duration: 0.3,
                        ease: "linear",
                      },
                    }}
                    exit={{ scaleX: 0, transformOrigin: "left" }} // Exit to the left
                  >
                    See All Films
                  </motion.span>
                )}
              </Link>
              <section className="w-[63rem]  h-48 flex-col">
                <ul className="w-full h-1/2 flex gap-2 justify-center items-center border-t border-white border-opacity-20 mt-2">
                  {digitalStore.iTunes && (
                    <li>
                      <Link
                        to={digitalStore.iTunes}
                        target="_blank"
                        className="h-12 w-40 bg-red-50 bg-opacity-60 hover:bg-opacity-80 hover:scale-95 rounded-md p-1 flex justify-between gap-1 items-center transition-all duration-300"
                      >
                        <img
                          src={itunes}
                          alt={`${title} iTunes Link`}
                          className="h-3/4 object-cover object-center"
                        />
                        <span className="font-bold flex-1 text-center">
                          iTunes Store
                        </span>
                      </Link>
                    </li>
                  )}
                  {digitalStore.googlePlay && (
                    <li>
                      <Link
                        to={digitalStore.googlePlay}
                        target="_blank"
                        className="h-12 w-40 bg-red-50 bg-opacity-60 hover:bg-opacity-80 hover:scale-95 rounded-md p-1 flex justify-between gap-1 items-center transition-all duration-300"
                      >
                        <img
                          src={googleplay}
                          alt={`${title} Google Play Link`}
                          className="h-3/4 object-cover object-center"
                        />
                        <span className="font-bold flex-1 text-center">
                          Google Play
                        </span>
                      </Link>
                    </li>
                  )}
                  {digitalStore.ms && (
                    <li>
                      <Link
                        to={digitalStore.ms}
                        target="_blank"
                        className="h-12 w-40 bg-red-50 bg-opacity-60 hover:bg-opacity-80 hover:scale-95 rounded-md p-1 flex justify-between gap-1 items-center transition-all duration-300"
                      >
                        <img
                          src={ms}
                          alt={`${title} Microsoft Movies & TV Link`}
                          className="h-3/4 object-cover object-center"
                        />
                        <span className="font-bold flex-1 text-center text-xs">
                          Microsoft Movies & TV
                        </span>
                      </Link>
                    </li>
                  )}
                  {digitalStore.amazon && (
                    <li>
                      <Link
                        to={digitalStore.amazon}
                        target="_blank"
                        className="h-12 w-40 bg-red-50 bg-opacity-60 hover:bg-opacity-80 hover:scale-95 rounded-md p-1 flex justify-between gap-1 items-center transition-all duration-300"
                      >
                        <img
                          src={amazon}
                          alt={`${title} Amazon Link`}
                          className="h-3/4 object-cover object-center"
                        />
                        <span className="font-bold flex-1 text-center">
                          Amazon
                        </span>
                      </Link>
                    </li>
                  )}
                  {digitalStore.fetch && (
                    <li>
                      <Link
                        to={digitalStore.fetch}
                        target="_blank"
                        className="h-12 w-40 bg-red-50 bg-opacity-60 hover:bg-opacity-80 hover:scale-95 rounded-md p-1 flex justify-between gap-1 items-center transition-all duration-300"
                      >
                        <img
                          src={fetch}
                          alt={`${title} Fetch TV Link`}
                          className="h-3/4  object-cover object-center"
                        />
                        <span className="font-bold flex-1 text-center text-xs">
                          Fetch TV
                        </span>
                      </Link>
                    </li>
                  )}
                </ul>
                <div className="w-full h-1/2 text-center text-white text-sm">
                  <h1 className="text-base text-red-50 font-bold tracking-wide">{`${title} on Digital`}</h1>
                  <p className="opacity-60">{`Buy or rent ${title} from the retailers above:`}</p>
                </div>
              </section>
            </div>
          </main>
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
