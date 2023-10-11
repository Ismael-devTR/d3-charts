import React, { FC } from "react";
import styles from "./HelloSVG.module.scss";

interface HelloSvgProps {}

const HelloSvgOne = () => {
  return (
    <div data-testid="HelloSvg">
      <svg width={"500"} height={"500"}>
        <g transform="translate(0,0)">
          <rect
            className=".myRect"
            width={"300"}
            height={"300"}
            fill="tomato"
          />
        </g>
      </svg>
    </div>
  );
};

export default HelloSvgOne;
