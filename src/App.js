import React from "react";
import "./App.css";
import CallToAction from "./Components/CallToAction/CallToAction";
import Cards from "./Components/Cards/Cards";

import Hero from "./Components/Hero/Hero";
import HeroOne from "./Components/HeroOne/HeroOne";
import HeroTwo from "./Components/HeroTwo/HeroTwo";
import Involved from "./Components/Involved/Involved";
import YouTube from "./Components/YouTube/YouTube";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
      </BrowserRouter> */}
      <Hero />
      <Cards />
      <HeroOne />
      <YouTube />
      <CallToAction />
      <HeroTwo />
      <Involved />
    </div>
  );
}

export default App;
