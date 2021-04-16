export default {
  name: "aboutTwo",
  title: "About Two",
  type: "document",
  fields: [
    {
      name: "sectionContent",
      title: "Section Content",
      type: "sectionContent",
    },
    {
      name: "button",
      title: "Button",
      type: "button",
    },
    {
      name: "gallery",
      title: "gallery",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
  preview: {
    select: {
      title: "sectionContent.title"
    }
  }
}
