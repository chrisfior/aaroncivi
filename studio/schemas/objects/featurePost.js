export default {
  name: "featurePost",
  title: "feature Post",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
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
