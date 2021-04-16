export default {
  name: "sliderTwo",
  title: "Slider Two",
  type: "document",
  fields: [
    {
      name: "sectionContent",
      title: "Section Content",
      type: "sectionContent"
    },
    {
      name: "slides",
      title: "slides",
      type: "array",
      of: [{ type: "slide" }],
    },
  ],
  preview: {
    select: {
      title: "sectionContent.title"
    }
  }
};
