import React from "react";
import {paragraphs} from "../data/onlineport_data";
import {SiReact, SiTypescript, SiTailwindcss} from "react-icons/si";

interface State {
  readMore: boolean;
}

class OnlinePortfolio extends React.Component {
  state: State = {
    readMore: false,
  };

  handleClick = () => {
    this.setState({
      readMore: !this.state.readMore,
    });
  };

  render() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 headerBlock shadow-2xl">
        <div className="headerBlock hidden xl:block bg-80s-yellow py-4">
          <div className="flex justify-center text-5xl">
            <SiReact className="mx-3" />
            <SiTypescript className="mx-3" />
            <SiTailwindcss className="mx-3" />
          </div>
        </div>
        <div className="headerBlock col-span-4 xl:col-span-3 bg-80s-red text-4xl sm:text-5xl p-4 text-white">
          online portfolio
        </div>
        <div className="headerBlock col-span-4 sm:col-span-1 sm:row-start-4 md:col-span-2 xl:col-span-1 xl:row-start-auto bg-80s-black">
          <img alt="new portfolio" src="./images/newPortfolioSS.png"></img>
        </div>
        <div className="headerBlock row-span-2 col-span-4 xl:col-span-2 bg-80s-blue bigParagraph p-7 text-white">
          {paragraphs[0]}
        </div>
        <div className="headerBlock hidden xl:block row-span-2 bg-80s-black">
          <img alt="piet mondrian" src="./images/mondrian.png"></img>
        </div>
        <div className="headerBlock col-span-4 sm:col-span-1 md:col-span-2 xl:col-span-1 xl:row-start-3 bg-80s-black">
          <img alt="old portfolio" src="./images/oldPortfolioSS.png"></img>
        </div>
        <div
          onClick={this.handleClick}
          className="headerBlock col-span-4 bg-80s-yellow text-3xl sm:text-5xl p-4 hover:cursor-pointer select-none"
        >
          read more{" "}
          <span className="text-3xl">{this.state.readMore ? "▼" : "▶"}</span>
        </div>

        <div
          className={
            this.state.readMore ? "col-span-4 grid grid-cols-4" : "hidden"
          }
        >
          <div className="headerBlock col-span-4 bg-80s-red text-white bigParagraph p-5">
            {paragraphs[1]}
          </div>
          <div className="headerBlock col-span-2 hidden xl:block">
            <img alt="santi fiorino" src="./images/me.png" />
          </div>
          <div className="headerBlock col-span-4 block xl:hidden">
            <img alt="santi fiorino" src="./images/me_lg.png" />
          </div>
          <div className="headerBlock col-span-4 xl:col-span-2 bg-80s-blue text-white bigParagraph p-5">
            {paragraphs[2]}
          </div>
        </div>
      </div>
    );
  }
}

export default OnlinePortfolio;
