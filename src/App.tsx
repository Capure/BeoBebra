import React, { useState } from "react";
import "./App.css";
import { CanvasHolder } from "./components/CanvasHolder";

interface point {
  x: number;
  y: number;
}

function App() {
  const [canvasController, setCanvasController] = useState<any>();

  const translatePoints = (points: Array<point>, canvasController: any) =>
    points.map((value) => ({
      x: value.x + canvasController.width / 2,
      y: value.y + canvasController.height / 2,
    }));

  const scalePoints = (points: Array<point>, scale: number) =>
    points.map((value) => ({
      x: value.x * scale,
      y: value.y * scale,
    }));
  const draw = (canvasController: any) => {
    //canvasController.drawLine(10, 10, 10, 10, "#0f025c");
    //canvasController.drawDot(10, 10, "#FFFFFF");
    const points: Array<point> = [{ x: 0, y: 0 }];
    for (let i = -1000; i <= 1000; i++) {
      points.push({ x: i, y: 20 * Math.sin(i / 10) });
    }

    translatePoints(scalePoints(points, 2), canvasController).forEach(
      (value) => {
        canvasController.drawDot(value.x, value.y, "#FFFFFF");
      }
    );
  };

  const setup = (canvasController: any) => {
    setCanvasController(canvasController);
    draw(canvasController);
  };
  return (
    <>
      <CanvasHolder onCanvasReady={setup} />
    </>
  );
}

export default App;
