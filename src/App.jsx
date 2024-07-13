import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// import Contact from "./Components/Contact/Contact";
import Testimonial from "./Components/Testimonial/Testimonial";
// import Carousel from "./Components/Home/Carousel";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <Hero />
      <Testimonial />
    </>
  );
}

export default App;
