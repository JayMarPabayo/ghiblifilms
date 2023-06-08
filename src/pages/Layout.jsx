import { Outlet, Link, useLocation } from "react-router-dom";
import { createContext } from "react";

import logo from "../assets/studio.png";

// -- Spirited Away
import spiritedaway_figure from "../assets/films/spirited-away/figure.jpg";
import spiritedaway_poster from "../assets/films/spirited-away/poster.jpg";

// -- My Neighbor Totoro
import myneighbortotoro_figure from "../assets/films/my-neighbor-totoro/figure.jpg";
import myneighbortotoro_poster from "../assets/films/my-neighbor-totoro/poster.jpg";

// -- Castle In The Sky
import castleinthesky_figure from "../assets/films/castle-in-the-sky/figure.jpg";
import castleinthesky_poster from "../assets/films/castle-in-the-sky/poster.jpg";

export const FilmsContext = createContext({});

const Layout = () => {
  const films = [
    {
      title: "Spirited Away",
      kanji: "千と千尋の神隠し",
      year: "2001",
      director: "Hayao Miyazaki",
      runtime: "125 mins",
      figure: spiritedaway_figure,
      poster: spiritedaway_poster,
      header: `Hayao Miyazaki's Academy Award-winning masterpiece returns to cinemas for a limited time in celebration of its 20th Anniversary.`,
      body: `Chihiro thinks she is on another boring trip with her parents. But when they stop at a village that is not all that it seems, her parents undergo a mysterious transformation, and Chihiro is whisked into a world of fantastic spirits, shape-shifting dragons and a witch who never wants to see her leave. She must call on the courage she never knew she had to free herself and return her family to the outside world.
        The second biggest box office hit of all time in Japan, Spirited Away helped redefine the possibilities of animation for Western audiences and a generation of new filmmakers.
        Combining Japanese mythology with Alice in Wonderland-type whimsy, Spirited Away cemented Miyazaki's reputation as an icon of animation and storytelling.`,
      digitalStore: {
        iTunes: `https://itunes.apple.com/us/movie/spirited-away/id1519917922?ls=1`,
        googlePlay: `https://www.microsoft.com/en-au/p/spirited-away-english-version/8d6kgwxn7dh5?activetab=pivot%3aoverviewtab`,
        ms: `https://www.microsoft.com/en-au/p/my-neighbor-totoro/8d6kgwxn77dl?activetab=pivot%3aoverviewtab`,
        amazon: `https://www.primevideo.com/detail/0ND9X825YGEN1TG3OGRT284YZT/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B08G4B8H43&qid=1603948193`,
        fetch: `https://www.fetchtv.com.au/movie/details/2179289`,
      },
    },

    {
      title: "Laputa Castle In The Sky",
      kanji: "天空の城ラピュタ",
      year: "1986",
      director: "Hayao Miyazaki",
      runtime: "125 mins",
      figure: castleinthesky_figure,
      poster: castleinthesky_poster,
      header: `The Search For The Legendary Floating Castle...`,
      body: `Pazu, an engineer's apprentice finds a young girl, Sheeta floating down from the sky wearing a glowing pendant. Together they discover both are searching for the legendary floating castle Laputa and vow to unravel the mystery of the luminous crystal around her neck. Their quest won't be easy however. There are air pirates, secret agents and astounding obstacles to keep them from the truth - and from each other.`,
      digitalStore: {
        iTunes: `https://itunes.apple.com/us/movie/laputa-castle-in-the-sky/id1521577613?ls=1`,
        googlePlay: `https://play.google.com/store/movies/details/Laputa_Castle_In_the_Sky?id=aNY6k-Pwmqg.P`,
        ms: `https://www.microsoft.com/en-au/p/laputa-castle-in-the-sky-english-version/8d6kgwxn77d4?activetab=pivot%3aoverviewtab`,
        amazon: `https://www.primevideo.com/detail/0OO5UBE1FOHE8J33DFUU25HBUK/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B08DTFJV2S&qid=1603955397`,
        fetch: `https://www.fetchtv.com.au/movie/details/2168892`,
      },
    },
    {
      title: "My Neighbor Totoro",
      kanji: "となりのトトロ",
      year: "1988",
      director: "Hayao Miyazaki",
      runtime: "86 mins",
      figure: myneighbortotoro_figure,
      poster: myneighbortotoro_poster,
      header: `When you need a friend, Totoro is waiting!`,
      body: `Two young girls, Satsuki and Mei, have moved with their father into a new home in the country, while their mother recovers from illness in a nearby hospital. To their surprise, they soon discover that they share this home with some rather unusual creatures and even stranger neighbours - forest guardians that the girls dub Totoro. When trouble occurs, their new friends will help them rediscover hope.`,
      digitalStore: {
        iTunes: `https://itunes.apple.com/us/movie/my-neighbor-totoro/id1520290363?ls=1`,
        googlePlay: `https://play.google.com/store/movies/details/My_Neighbor_Totoro?id=rVBz898EICs.P`,
        ms: `https://www.microsoft.com/en-au/p/my-neighbor-totoro/8d6kgwxn77dl?activetab=pivot%3aoverviewtab`,
        amazon: `https://www.primevideo.com/detail/0T1VL1U8CWSNT6OS33CWUMB3F5/ref=atv_sr_def_c_unkc__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B08DNB3RLG&qid=1603949036`,
        fetch: `https://www.fetchtv.com.au/movie/details/2168888`,
      },
    },
  ];

  const location = useLocation();
  const showHeader = location.pathname !== "/";

  return (
    <div className="w-full relative">
      {showHeader && (
        <header className="h-32 w-full px-32 flex justify-between items-center bg-red-50 bg-opacity-70 py-2">
          <Link to="/" className="h-full">
            <img src={logo} alt="Logo" className="h-full" />
          </Link>
          <div className="h-full w-[800px] bg-[#756840] text-center text-white pt-2 px-2">
            <h1 className="font-semibold text-base">
              Celebrating 25 years of Princess Mononoke
            </h1>
            <h2 className="text-sm opacity-75">
              Hayao Miyazaki's masterpiece returns to cinemas for a limited time
              in celebration of its 25th Anniversary.
            </h2>
            <p className="text-xs mt-2">
              In the 14th century, the harmony that humans, animals and gods
              have enjoyed begins to crumble. The protagonist, young Ashitaka -
              infected by an animal attack, seeks a cure from the deer-like god
              Shishigami. In his travels, he sees humans ravaging the earth,
              bringing down the wrath of wolf god Moro and his human companion
              Princess Mononoke. Hiskattempts to broker peace between her and
              the humans brings only conflict.
            </p>
          </div>
        </header>
      )}
      <FilmsContext.Provider value={films}>
        <Outlet />
      </FilmsContext.Provider>
    </div>
  );
};

export default Layout;
