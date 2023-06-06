// PAGES
import Films from "./pages/Films";
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
   return (
      <main className="w-full relative font-ysabeau">
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<LandingPage />} />
               <Route path="films" element={<Films />} />
            </Route>
         </Routes>
      </main>
   );
}

export default App;
