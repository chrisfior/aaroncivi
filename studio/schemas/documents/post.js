export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "iconName",
      title: "iconName",
      type: "string",
    },
    {
      name: "url",
      title: "url",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],
}
