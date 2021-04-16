export default {
  name: "portfolioHome",
  title: "Portfolio Home",
  type: "document",
  fields: [
    {
      name: "sectionContent",
      title: "Section Content",
      type: "sectionContent",
    },
    {
      name: "portfolioPosts",
      title: "Portfolio posts",
      type: "array",
      of: [{
        type: "reference",
        to: { type: "portfolioPost" },
      }],
    },
  ],
  preview: {
    select: {
      title: "sectionContent.title",
    },
  },
}
