import { BrowserRouter } from "react-router-dom";

import Aboute from "./Components/Aboute";
import Experince from "./Components/Experince";
import Teck from "./Components/Teck";
import Feedback from "./Components/Feedback";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

import Navbar from "./Components/nav/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Aboute />
          <Experince />
          <Teck />
          <Work />
          <Feedback />
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
