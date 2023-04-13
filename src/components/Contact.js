import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <footer className="site-footer m-2">
      <Container>
        <Row>
          <Col sm="12" className="text-center">
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col sm="6" className="text-center">
            <a role="button" className="btn btn-link" href="tel:+12065551234">
              1-369-555-1215
            </a>
          </Col>
          <Col sm="6" className="text-center">
            <a
              role="button"
              className="btn btn-link"
              href="mailto:notreal@notreal.co"
            >
              franktuttle@tuttlemusic.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Contact;
