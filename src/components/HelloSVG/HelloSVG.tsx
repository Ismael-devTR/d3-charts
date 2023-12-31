import React, { FC } from "react";
import styles from "./HelloSVG.module.scss";

interface HelloSvgProps {}

const HelloSvgOne = () => {
  const useTag = "<use xlink:href='#heart' />";

  return (
    <div data-testid="HelloSvg">
      <svg width={"500"} height={"500"}>
        <g transform="translate(0,0)">
          <rect
            className=".myRect"
            width={"500"}
            height={"300"}
            fill="tomato"
          />
        </g>
        <g
          fill="grey"
          transform="rotate(-10 50 100) translate(-36 45.5) skewX(40) scale(1 0.5)"
        >
          <path id="heart" d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
        </g>
         {/* eslint - disable - next - line react/no - danger */}
         <svg dangerouslySetInnerHTML={{__html: useTag}} fill="none" stroke="white" />
      </svg>
    </div>
  );
};

export default HelloSvgOne;
