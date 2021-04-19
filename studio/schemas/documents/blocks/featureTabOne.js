export default {
  name: "featureTabOne",
  title: "Feature tab one",
  type: "document",
  fields: [
    {
      name: "sectionContent",
      title: "Section Content",
      type: "sectionContent",
    },
    {
      name: "featureTabPosts",
      title: "posts",
      type: "array",
      of: [{ type: "featureTabPost" }],
    },
  ],
  preview: {
    select: {
      title: "sectionContent.title",
    },
  },
};
