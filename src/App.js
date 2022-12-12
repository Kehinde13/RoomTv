import React from "react";
import Navbar from "./components/Navbar";
import Nollywood from "./components/Nollywood";
import Animation from "./components/Animation";
import Series from "./components/Series";
import SuperHero from "./components/SuperHero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-gray-200">
       <Navbar />
       <Nollywood />
       <Animation />
       <Series />
       <SuperHero />
       <Footer />
    </div>
  );
}

export default App;
