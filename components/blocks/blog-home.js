import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import BlogCard from "@/components/blog-card";
import { BlogHomeSection, BlogData } from "@/data";

const BlogHome = ({ data = {} }) => {
  const { sectionContent = BlogHomeSection, blogs = BlogData } = data;
  return (
    <section className="commonSection blog">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <Row>
          {blogs.slice(0, 3).map((post, index) => (
            <Col lg={4} sm={12} md={6} key={index}>
              <BlogCard data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
