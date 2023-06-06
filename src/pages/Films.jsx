import { useEffect, useState } from "react";

// -- Spirited Away
import spiritedaway_figure from "../assets/films/spirited-away/figure.jpg";
import spiritedaway_poster from "../assets/films/spirited-away/poster.jpg";

// -- My Neighbor Totoro
import myneighbortotoro_figure from "../assets/films/my-neighbor-totoro/figure.jpg";
import myneighbortotoro_poster from "../assets/films/my-neighbor-totoro/poster.jpg";

// -- Castle In The Sky
import castleinthesky_figure from "../assets/films/castle-in-the-sky/figure.jpg";
import castleinthesky_poster from "../assets/films/castle-in-the-sky/poster.jpg";

const Films = () => {
   const [films, setFilms] = useState([]);

   useEffect(() => {
      setFilms([
         {
            title: "Spirited Away",
            kanji: "千と千尋の神隠し",
            year: "2001",
            figure: spiritedaway_figure,
            poster: spiritedaway_poster,
         },

         {
            title: "Castle In The Sky",
            kanji: "天空の城ラピュタ",
            year: "1986",
            figure: castleinthesky_figure,
            poster: castleinthesky_poster,
         },
         {
            title: "My Neighbor Totoro",
            kanji: "となりのトトロ",
            year: "1988",
            figure: myneighbortotoro_figure,
            poster: myneighbortotoro_poster,
         },
      ]);
   }, []);
   return (
      <div className="w-full px-32 mt-10">
         <main className="grid grid-cols-6 justify-start content-center">
            {films &&
               films.map((film, index) => (
                  <button
                     key={index}
                     className="h-72 w-48 overflow-hidden relative"
                  >
                     <img
                        src={film.poster}
                        className="h-full w-full object-center object-cover opacity-95 hover:opacity-100 hover:scale-[102%] transition-all duration-300"
                     />
                  </button>
               ))}
         </main>
      </div>
   );
};

export default Films;
