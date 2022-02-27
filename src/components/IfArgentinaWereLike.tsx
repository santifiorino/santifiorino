import React from "react";
import {paragraphs} from "../data/ifargentina_data";
import {Image} from "./Image";

import {SiReact, SiTypescript, SiTailwindcss} from "react-icons/si";

interface State {
  readMore: boolean;
}

class IfArgentinaWereLike extends React.Component {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 headerBlock shadow-2xl mb-20">
        <div className="headerBlock col-span-4 xl:col-span-3 bg-80s-yellow text-4xl sm:text-5xl p-4">
          if argentina were like...
        </div>
        <div className="headerBlock hidden xl:block bg-80s-white py-4">
          <div className="flex justify-center text-5xl">
            <SiReact className="mx-3" />
            <SiTypescript className="mx-3" />
            <SiTailwindcss className="mx-3" />
          </div>
        </div>
        <div className="headerBlock col-span-4 xl:col-span-2 bg-black">
          <Image
            img_href="https://santifiorino.github.io/siargentinafuera/"
            img_src="./images/ifargentinawerelike.png"
            img_alt="website"
          />
        </div>
        <div className="headerBlock col-span-4 xl:col-span-2 bg-80s-red bigParagraph p-7 text-white">
          {paragraphs[0]}
        </div>
        <div
          onClick={this.handleClick}
          className="headerBlock col-span-4 bg-80s-blue text-3xl sm:text-5xl p-4 text-white hover:cursor-pointer select-none"
        >
          read more{" "}
          <span className="text-3xl">{this.state.readMore ? "▼" : "▶"}</span>
        </div>

        <div
          className={
            this.state.readMore ? "col-span-4 grid grid-cols-4" : "hidden"
          }
        >
          <div className="headerBlock col-span-4 bg-80s-yellow bigParagraph p-5">
            {paragraphs[1]}
          </div>
          <div className="headerBlock col-span-4 md:col-span-2">
            <Image
              img_href="https://youtu.be/cSXhDp0Zu4g"
              img_src="./images/tv_1.png"
              img_alt="tv screen 1"
            />
          </div>
          <div className="headerBlock col-span-4 md:col-span-2">
            <Image
              img_href="https://youtu.be/aP20nRPJSr4"
              img_src="./images/tv_2.png"
              img_alt="tv screen 2"
            />
          </div>
          <div className="headerBlock col-span-4 xl:row-span-2 xl:col-span-1 bg-80s-red bigParagraph p-5 text-white">
            {paragraphs[2]}
          </div>
          <div className="headerBlock col-span-4 xl:col-span-3">
            <Image
              img_href="https://tn.com.ar/economia/2022/02/15/precios-el-juego-que-compara-a-argentina-con-finlandia-y-demuestra-los-efectos-de-la-inflacion/"
              img_src="./images/news_1.png"
              img_alt="news report 1"
            />
          </div>
          <div className="headerBlock col-span-4 xl:col-span-3">
            <Image
              img_href="https://www.lanacion.com.ar/lifestyle/el-sitio-que-muestra-como-serian-los-precios-en-la-argentina-con-la-inflacion-de-otros-paises-nid15022022/?outputType=amp"
              img_src="./images/news_2.png"
              img_alt="news report 2"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default IfArgentinaWereLike;
