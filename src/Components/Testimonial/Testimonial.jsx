
import "./Testimonial.css"; // Import CSS file for styling

const testimonials = [
  {
    id: 1,
    name: "Shyam Agarwal",
    text: "I was admitted to Suvira Hospital for a Hernia Operation. The hospital is new, well-equipped, and very clean. The doctors and staff were extremely cooperative and showed excellent hospitality. The only issue was parking Apart from this, everything else is highly commendable. I would give four stars out of five. 🌟🌟🌟🌟",
    role: "CEO, ABC Inc.",
  },
  {
    id: 2,
    name: "Parosh Franklin",
    text: "I am truly grateful to Dr. Vipin Jain for my operation. He is an exceptional doctor and incredibly supportive. He guided us through every step of my gallbladder removal surgery. A huge thumbs up to him! Equally commendable is his assistant, Mr. Deepak, who is very helpful and friendly. He assisted us with every concern we had about the surgery. I rate them both five out of five stars! 🌟🌟🌟🌟🌟",
  },
];

const TestimonialPage = () => {
  return (
    <div className="testimonial-container">
      <h1 className="title">Testimonials</h1>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="content">
              <p className="text">{testimonial.text}</p>
              <p className="name">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
