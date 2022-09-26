import React from "react";
import "./App.css";
import "./index.css";
import { Brand, CTA, NavBar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGpt3,
} from "./containers";

function App() {
  return (
    <div className="app">
      <div className="gradient_gb">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
