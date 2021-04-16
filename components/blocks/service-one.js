import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardOne from "@/components/service-card-one";

const ServiceOne = ({ data }) => {
  const { posts } = data;
  return (
    <section className="service_section_2 commonSection">
      <Container>
        <Row>
          {posts.map((post, index) => (
            <Col lg={4} md={12} key={index}>
              <ServiceCardOne data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceOne;
