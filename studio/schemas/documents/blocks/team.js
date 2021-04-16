export default {
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    {
      name: "sectionContent",
      title: "Section Content",
      type: "sectionContent",
    },
    {
      name: "users",
      title: "users",
      type: "array",
      of: [{
        type: "reference",
        to: [{ type: "teamUser" }],
      }],
    },
  ],
  preview: {
    select: {
      title: "sectionContent.title",
    },
  },
}
