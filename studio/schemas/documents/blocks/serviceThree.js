export default {
  name: "serviceThree",
  title: "Service Three",
  type: "document",
  fields: [
    {
      name: "sectionContent",
      title: "Section Content",
      type: "sectionContent"
    },
    {
      name: "posts",
      title: "posts",
      type: "array",
      of: [{
        type: "reference",
        to: [
          { type: "post" }
        ]
      }]
    }
  ],
  preview: {
    select: {
      title: "sectionContent.title"
    }
  }
};
