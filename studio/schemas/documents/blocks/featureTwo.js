export default {
  name: "featureTwo",
  title: "Feature two",
  type: "document",
  fields: [
    {
      name: "sectionContent",
      title: "Section Content",
      type: "sectionContent",
    },
    {
      name: "posts",
      title: "posts",
      type: "array",
      of: [{ type: "featurePost" }],
    },
    {
      name: "image",
      title: "image",
      type: "object",
      fields: [
        {
          name: "text",
          title: "text",
          type: "string"
        },
        {
          name: "path",
          title: "path",
          type: "image"
        },
      ]
    },
  ],
  preview: {
    select: {
      title: "sectionContent.title",
    },
  },
};
