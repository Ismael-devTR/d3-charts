import React, { FC, RefObject, useEffect, useRef } from "react";
import styles from "./Canvasjsx.module.scss";

interface CanvasjsxProps {}

const Canvasjsx = () => {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);

  function draw() {
    const { devicePixelRatio: ratio = 1} = window
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d");
    if (context) {
      context.fillStyle = "tomato";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.scale(ratio, ratio)
    }
  }

  useEffect(() => {
    draw();
  });

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default Canvasjsx;
