import React, { FC, RefObject } from "react";
import styles from "./SimpleChart.module.scss";
import * as d3 from "d3";

interface ISimpleChartProps {}

interface ISimpleChartState {}

export default class SimpleChar extends React.PureComponent<
  ISimpleChartProps,
  ISimpleChartState
> {
  ref: React.RefObject<HTMLDivElement>;
  data: number[];

  constructor(props: ISimpleChartProps) {
    super(props);
    this.ref = React.createRef();
    this.data = [100, 200, 300, 400, 500];
  }

  drawChart() {
    
  }

  componentDidMount() {
    const size = 500;
    const svg = d3
      .select(this.ref.current)
      .append("svg")
      .attr("width", size)
      .attr("height", size);

    const rectWidth = 95;
    svg
      .selectAll("rect")
      .data(this.data)
      .enter()
      .append("rect")
      .attr("x", (_data, index) => index * (rectWidth + 5))
      .attr("y", (data) => size - data)
      .attr("width", rectWidth)
      .attr("height", (data) => data)
      .attr("fill", "tomato");    console.log("renders");
    
  }

  render(): React.ReactNode {
    return <div className="simple-chart" ref={this.ref} />;
  }
}
