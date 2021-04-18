export default {
  name: "contactInfos",
  title: "Contact Infos",
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
      of: [{ type: "contactInfo" }],
    },
  ],
  preview: {
    select: {
      title: "sectionContent.title",
    },
  },
}
