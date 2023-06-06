import { useNavigate } from "react-router-dom";

import spiritedaway_figure from "../assets/films/spirited-away/figure.jpg";

const LandingPage = () => {
   const navigate = useNavigate();

   return (
      <div className="h-screen absolute inset-0 flex justify-between gap-3 z-50">
         <figure className="w-[45%] h-full relative">
            <img
               src={spiritedaway_figure}
               alt="Spirited Away"
               className="h-full w-full object-cover object-center"
            />
            <div className="absolute bottom-2 left-2 flex flex-col gap-1 text-white tracking-wider">
               <h2 className="text-sm">Spirited Away . 2001</h2>
               <h2 className="text-xs"> 千と千尋の神隠し</h2>
            </div>
         </figure>
         <article className="w-[55%] h-full flex flex-col justify-center items-center gap-10">
            <h1 className="font-great-vibes text-center tracking-widest text-6xl font-semibold">
               Spirited Away
            </h1>
            <p className="px-2 text-center">
               In the enchanting world of "Spirited Away," we embark on a
               mesmerizing journey alongside a young girl named Chihiro. When
               her family stumbles upon a mysterious abandoned amusement park,
               Chihiro discovers a hidden realm filled with spirits, gods, and
               magical beings. As night falls, her parents are transformed into
               pigs, leaving Chihiro alone and bewildered in this ethereal
               realm. Determined to save her parents and find her way back home,
               Chihiro must navigate a perplexing world ruled by an enigmatic
               sorceress, Yubaba. With the help of newfound friends, including
               the courageous Haku, a young river spirit, Chihiro embarks on a
               thrilling quest filled with breathtaking landscapes, strange
               creatures, and awe-inspiring wonders. As Chihiro becomes entwined
               in the intricate web of the spirit world, she must summon her
               inner strength and bravery to overcome daunting challenges and
               face her deepest fears. Along her odyssey, Chihiro discovers her
               own resilience and learns valuable lessons about love,
               friendship, and the power of embracing one's true identity.
               "Spirited Away" is a visually stunning masterpiece, weaving
               together elements of fantasy, adventure, and coming-of-age
               storytelling. Director Hayao Miyazaki paints a vibrant tapestry
               of imagination, capturing the hearts of audiences young and old.
               This enchanting tale reminds us of the beauty that lies within
               the unknown and the transformative power of self-discovery.
            </p>
            <button
               type="button"
               className="text-gray-900 hover:text-white border border-black hover:bg-black hover:tracking-wide font-medium rounded-[60px] text-base px-7 py-1 text-center  duration-300 transition-all"
               onClick={() => navigate("films")}
            >
               See Films
            </button>
         </article>
      </div>
   );
};

export default LandingPage;
