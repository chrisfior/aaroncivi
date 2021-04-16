import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogSidebar from "@/components/blog-sidebar";
import SinglePostCard from "@/components/single-post-card";

const BlogDetails = ({ data, others }) => {
  return (
    <section className="commonSection blogDetails">
      <Container>
        <Row>
          <Col lg={8}>
            <SinglePostCard data={data} />
          </Col>
          <Col lg={4} className="sidebar">
            <BlogSidebar items={others} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
