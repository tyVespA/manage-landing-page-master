import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MainSection />
      </main>
    </>
  );
}

export default App;
