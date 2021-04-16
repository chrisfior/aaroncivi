import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Paginations from "@/components/paginations";
import BlogCard from "@/components/blog-card";

const BlogOne = ({ items = [] }) => {
  return (
    <section className="commonSection blogPage">
      <Container>
        <Row>
          {items.map((post, index) => (
            <Col lg={4} sm={12} md={6} key={index}>
              <BlogCard data={post} />
            </Col>
          ))}
        </Row>
        <Paginations />
      </Container>
    </section>
  );
};

export default BlogOne;
