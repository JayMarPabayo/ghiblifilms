import { useContext } from "react";
import { Link } from "react-router-dom";
import { FilmsContext } from "./Layout";

const Films = () => {
  const films = useContext(FilmsContext);
  return (
    <div className="w-full px-32 mt-10">
      <main className="grid grid-cols-6 justify-start content-center">
        {films &&
          films.map((film, index) => (
            <Link
              to={film.title?.toLowerCase().replace(/\s+/g, "-")}
              key={index}
              title={film.title}
              className="h-72 w-48 overflow-hidden relative"
            >
              <img
                src={film.poster}
                className="w-full object-center object-contain opacity-95 hover:opacity-100 hover:scale-[102%] transition-all duration-300"
              />
            </Link>
          ))}
      </main>
    </div>
  );
};

export default Films;
