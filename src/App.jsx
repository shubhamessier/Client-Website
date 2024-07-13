import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
// import Carousel from "./Components/Home/Carousel";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <Hero />
      <Contact />
    </>
  );
}

export default App;
