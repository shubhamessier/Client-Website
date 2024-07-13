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
<<<<<<< HEAD
            src="https://images.unsplash.com/photo-1589279003513-467d320f47eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
=======
          src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
>>>>>>> ff06282ffdc0d7a06c4fcb32cd8c1fdf90d2ea6e
            alt="Image 1"
          />
        </div>
        <div>
          <img
<<<<<<< HEAD
            src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
=======
          src="https://images.unsplash.com/photo-1589279003513-467d320f47eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
>>>>>>> ff06282ffdc0d7a06c4fcb32cd8c1fdf90d2ea6e
            alt="Image 2"
          />
        </div>
        <div>
          <img
<<<<<<< HEAD
          src="https://thumbs.dreamstime.com/z/portrait-happy-male-doctor-senior-man-men-hospital-77898523.jpg"
=======
<<<<<<< HEAD
            src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
=======
          src="https://images.unsplash.com/photo-1609207825181-52d3214556dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
>>>>>>> ff06282ffdc0d7a06c4fcb32cd8c1fdf90d2ea6e
>>>>>>> dbdb15f7b0e2817aafb1b91d360dcac49c8c6de0
            alt="Image 3"
          />
        </div>
        {/* Add more images as needed */}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
