import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarousel.css"; // Optional: Add custom styles

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // Change slide interval time
        transitionTime={500} // Change slide transition time
        stopOnHover={true}
        swipeable={true}
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxoZWFsdGhjYXJlfGVufDB8fDB8fHww"
            alt="Image 1"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D"
            alt="Image 2"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1599493758267-c6c884c7071f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxoZWFsdGhjYXJlfGVufDB8fDB8fHww"
            alt="Image 3"
          />
        </div>
        {/* Add more images as needed */}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
