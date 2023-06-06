import { Outlet, Link, useLocation } from "react-router-dom";

import logo from "../assets/studio.png";

const Layout = () => {
   const location = useLocation();
   const showHeader = location.pathname !== "/";
   return (
      <div className="w-full relative">
         {showHeader && (
            <header className="h-32 w-full px-32 flex justify-between items-center ">
               <Link to="/" className="h-full">
                  <img src={logo} alt="Logo" className="h-full" />
               </Link>
               <div className="h-full w-[800px] bg-[#756840] text-center text-white pt-2">
                  <h1 className="font-semibold">
                     Celebrating 25 years of Princess Mononoke
                  </h1>
                  <h2 className="text-sm opacity-75">
                     Hayao Miyazaki's masterpiece returns to cinemas for a
                     limited time in celebration of its 25th Anniversary.
                  </h2>
                  <p className="text-xs mt-2">
                     In the 14th century, the harmony that humans, animals and
                     gods have enjoyed begins to crumble. The protagonist, young
                     Ashitaka - infected by an animal attack, seeks a cure from
                     the deer-like god Shishigami. In his travels, he sees
                     humans ravaging the earth, bringing down the wrath of wolf
                     god Moro and his human companion Princess Mononoke.
                     Hiskattempts to broker peace between her and the humans
                     brings only conflict.
                  </p>
               </div>
            </header>
         )}
         <Outlet />
      </div>
   );
};

export default Layout;
