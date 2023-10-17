/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import styles from "./SimpleChart.module.scss";
import * as d3 from "d3";

interface ISimpleChartProps {}

interface ISimpleChartState {}

export const SimpleChertFunction = () =>{
  const [data, setData] = useState([100,200,350,400,500,600])
  const ref = useRef(null)


  function drawChart() {
    const size = 500;
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", size)
      .attr("height", size);

    const rectWidth = 95;
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (_data, index) => index * (rectWidth + 5))
      .attr("y", (data) => size - data)
      .attr("width", rectWidth)
      .attr("height", (data) => data)
      .attr("fill", "tomato");
  }

  useEffect(()=>{
    drawChart()
  },[data])

    return <>
    <div className="simple-chart" ref={ref} /></>
}
