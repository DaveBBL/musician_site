import { Container, Row, Col } from "reactstrap";
import Title from "../components/Title";

const Videos = () => {
  return (
    <div>
      <Title title="VIDEOS" />
      <Container>
        <Row>
          <Col xs="12">
            <div className="ratio ratio-16x9">
              <iframe
                title="Testing"
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Videos;
