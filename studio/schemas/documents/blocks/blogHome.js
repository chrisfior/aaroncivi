export default {
  name: "blogHome",
  title: "Blog Home",
  type: "document",
  fields: [
    {
      name: "sectionContent",
      title: "Section Content",
      type: "sectionContent",
    },
    {
      name: "blogs",
      title: "Blogs",
      type: "array",
      of: [{
        type: "reference",
        to: { type: "blog" },
      }],
    },
  ],
  preview: {
    select: {
      title: "sectionContent.title",
    },
  },
}
