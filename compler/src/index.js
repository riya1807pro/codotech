import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PlayScreen from "./Playground/PlayScreen";
import Homepage from "./Home/Homepage";
import { PlaygroundProvider } from "./Provider/PlaygroundProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PlaygroundProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/PlayScreen" element={<PlayScreen />} />
      </Routes>
    </BrowserRouter>
  </PlaygroundProvider>
);
