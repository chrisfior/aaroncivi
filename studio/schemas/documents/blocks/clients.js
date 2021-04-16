export default {
  name: "clients",
  title: "Clients",
  type: "document",
  fields: [
    {
      name: "sectionContent",
      title: "Section Content",
      type: "sectionContent",
    },
    {
      name: "items",
      title: "items",
      type: "array",
      of: [{ type: "client" }],
    },
  ],
  preview: {
    select: {
      title: "sectionContent.title",
    },
  },
}
