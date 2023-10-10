import React, { useEffect } from "react";
import styles from "./HelloD3.module.scss";
import * as d3 from "d3";

interface HelloD3Props {}

const HelloD3 = () => {
  const ref: any = React.createRef();
  function draw() {
    d3.select(ref.current).append("p").text("hello world k");
    d3.select("svg")
      .append("g")
      .attr("transform", "translate(255, 0)")
      .append("react")
      .attr("width", 500)
      .attr("fill", "tomato");
  }

  useEffect(() => {
    draw();
  },[]);
  return (
    <div className={styles.HelloD3} data-testid="HelloD3" ref={ref}>
      <svg width={"500"} height={"500"}>
        <g transform="translate(0,0)">
          <rect width={"500"} height={"500"} fill="green" />
        </g>
      </svg>
    </div>
  );
};

export default HelloD3;
