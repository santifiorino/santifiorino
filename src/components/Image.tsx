import React from "react";

interface Props {
  img_href: string;
  img_src: string;
  img_alt: string;
}

export const Image = (props: Props) => (
  <div className="bg-black">
    <a href={props.img_href} target="_blank" rel="noreferrer">
      <img
        className="hover:opacity-70"
        src={props.img_src}
        alt="si argentina fuera"
      />
    </a>
  </div>
);
