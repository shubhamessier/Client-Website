import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Services.css";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation triggers only once
    threshold: 0.5, // Adjust as needed for when animation should start
  });

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="services"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
    >
      <motion.div className="service" whileHover={{ scale: 1.05 }}>
        <h2 style={{ color: "#333333" }}>Bariatric and Weight Loss Surgery</h2>
        <p>
          Take Control of Your Health: Bariatric surgery empowers you to take
          charge of your health and well-being.
        </p>
      </motion.div>
      <motion.div className="service" whileHover={{ scale: 1.05 }}>
        <h2 style={{ color: "#333333" }}>GI Laparoscopic Surgery</h2>
        <p>
          Say Yes to Digestive Comfort: Say yes to digestive comfort and relief
          with targeted GI surgical interventions tailored to your needs.
        </p>
      </motion.div>
      <motion.div className="service" whileHover={{ scale: 1.05 }}>
        <h2 style={{ color: "#333333" }}>Minimal Access Surgery</h2>
        <p>
          Say Hello to a Smoother Journey: Say hello to a smoother surgical
          journey and faster recovery with the advanced methods of minimal
          access surgery.
        </p>
      </motion.div>
      <motion.div className="service" whileHover={{ scale: 1.05 }}>
        <h2 style={{ color: "#333333" }}>Hernia Surgery</h2>
        <p>
          Choose Ease and Comfort: Choose ease and comfort with hernia surgery,
          ensuring a smoother, hernia-free life ahead.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Services;
