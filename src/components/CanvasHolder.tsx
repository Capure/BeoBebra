import React, { useRef, useEffect } from "react";
import styled from "styled-components";

export const CanvasHolder = function (props: any) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawLine = (
    xStart: number,
    yStart: number,
    xFinish: number,
    yFinish: number,
    color: string
  ) => {
    if (canvasRef.current !== null) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.lineCap = "round";
        ctx.lineWidth = 4;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(xStart, yStart);
        ctx.lineTo(xFinish, yFinish);
        ctx.stroke();
      }
    }
  };
  const drawDot = (x: number, y: number, color: string) =>
    drawLine(x, y, x, y, color);

  const clearCanvas = () => {
    if (canvasRef.current !== null) {
      const ctx = canvasRef.current.getContext("2d");
      ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    console.log(canvas!.width);
    props.onCanvasReady({
      drawLine,
      clearCanvas,
      drawDot,
      width: canvas!.width,
      height: canvas!.height,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <CanvasHolderWrapper>
        <Canvas ref={canvasRef}></Canvas>
      </CanvasHolderWrapper>
    </>
  );
};

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const CanvasHolderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #790556;
`;
