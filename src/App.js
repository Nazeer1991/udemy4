import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showPara, setShowPara] = useState(false);
  const toggleParaHandler = () => {
    setShowPara((prevState) => !prevState);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={toggleParaHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
