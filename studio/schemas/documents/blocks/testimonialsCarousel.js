export default {
  name: "testimonialsCarousel",
  title: "Testimonials Carousel",
  type: "document",
  fields: [
    {
      name: "sectionContent",
      title: "Section Content",
      type: "sectionContent"
    },
    {
      name: "testimonialsPosts",
      title: "posts",
      type: "array",
      of: [{ type: "testimonial" }],
    },
  ],
  preview: {
    select: {
      title: "sectionContent.title"
    }
  },
};
