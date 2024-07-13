
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import "./Contact.css"; // Import custom CSS file for styling

const Footer = () => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
    // Reset form after submission
    reset();
  };

  return (
    <footer className="bg-primary text-white py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h3 className="mb-4">Contact Us</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formName">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      placeholder="Your Name"
                      className="mb-3 form-field"
                      required
                    />
                  )}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="email"
                      placeholder="Your Email"
                      className="mb-3 form-field"
                      required
                    />
                  )}
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      as="textarea"
                      rows={4}
                      placeholder="Your Message"
                      className="mb-3 form-field"
                      required
                    />
                  )}
                />
              </Form.Group>
              <Button variant="light" type="submit" className="submit-button">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="text-center">
            <h3 className="mb-4">Connect with Us</h3>
            <div className="social-links mb-4">
              <a href="https://facebook.com" className="social-icon">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="social-icon">
                <FaLinkedin />
              </a>
            </div>
            <p className="text-muted">Follow us on social media for updates.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
