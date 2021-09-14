import React, { useState } from "react";
import "./App.css";
import { CanvasHolder } from "./components/CanvasHolder";

function App() {
  const [canvasController, setCanvasController] = useState<any>();

  const draw = (canvasController: any) => {
    canvasController.drawLine(10, 10, 100, 100, "#0f025c");
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
