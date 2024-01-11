import React from "react";
import { Navbar } from "./Component/navbar";
import { Hero } from "./Component/Hero";
import { DigitalMarketing } from "./Component/DigitialMarkieting";
import { Newsletter } from "./Component/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DigitalMarketing />
      <Newsletter />
    </div>
  );
}

export default App;
