import {Socials} from "./Socials";

export const Header = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 headerBlock shadow-gray-300 shadow-2xl">
    <div className="sm:col-span-2 headerBlock bg-80s-red h-20"></div>
    <div className="sm:row-span-2 headerBlock  bg-80s-yellow text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2 py-7 sm:py-14 md:py-10 lg:py-14">
      <p>21 years old</p>
      <p>argentinian</p>
      <p>programmer</p>
    </div>
    <div className="headerBlock bg-80s-white text-3xl md:text-3xl lg:text-5xl px-2 py-7 md:py-10 lg:py-14">
      <p>pursuing a</p>
      <p>M.S. degree in</p>
      <p>computer science</p>
    </div>
    <div className="headerBlock bg-80s-blue">
      <Socials />
    </div>
  </div>
);
