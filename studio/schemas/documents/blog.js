export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "image",
      type: "image",
    },
    {
      name: "date",
      title: "date",
      type: "date",
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
