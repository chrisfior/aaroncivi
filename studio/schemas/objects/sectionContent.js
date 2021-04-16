export default {
  name: "sectionContent",
  title: "Section Content",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subTitle",
      title: "SubTitle",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
