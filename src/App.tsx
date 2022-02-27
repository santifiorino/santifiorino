import React from "react";
import "./App.css";

import {Logo} from "./components/Logo";
import {Header} from "./components/Header";
import IfArgentinaWereLike from "./components/IfArgentinaWereLike";
import OnlinePortfolio from "./components/OnlinePortfolio";

function App() {
  return (
    <div className="App select-none">
      <div className="max-w-7xl w-11/12 mx-auto mb-32">
        <Logo />
        <Header />
      </div>
      <div className="cuadradillos border-t-8 border-80s-black">
        <div className="max-w-7xl w-11/12 mx-auto py-32">
          <div className="headerBlock grid grid-cols-4 mb-20 shadow-2xl">
            <div className="headerBlock bg-80s-red font-bugaki text-white text-2xl sm:text-4xl md:text-5xl h-20 py-5 sm:py-4 md:py-3">
              2022
            </div>
            <div className="headerBlock col-span-3 bg-80s-blue font-bugaki text-white text-2xl sm:text-4xl md:text-5xl h-20 py-5 sm:py-4 md:py-3">
              personal projects
            </div>
          </div>
          <IfArgentinaWereLike />
          <OnlinePortfolio />
        </div>
      </div>
    </div>
  );
}

export default App;
