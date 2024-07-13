import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Services.css";

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="card-hover">
            <Card.Img variant="top" src="https://www.renalandurologynews.com/wp-content/uploads/sites/22/2019/01/auadoctortalkingtoseniorp_1218045-860x573.jpg" />
            <Card.Body>
              <Card.Title>GI Laparoscopic Surgery</Card.Title>
              <Card.Text>
              Say Yes to Digestive Comfort: Say yes to digestive comfort and relief with targeted GI surgical interventions tailored to your needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;