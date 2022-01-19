import { Col, Container, Row } from "react-bootstrap";
import { Catagories } from "../../components/Catagories/catagories";
import { Video } from "../../components/Video/videos";

export const Homescreen = () => {
  return (
    <Container>
      <Catagories />

      <Row>
        {[...new Array(20)].map(() => (
          <Col lg  = {3} md = {4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
