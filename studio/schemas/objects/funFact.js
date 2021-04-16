export default {
  name: "funfact",
  title: "Fun fact",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "countNumber",
      title: "Count Number",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "countNumber",
    },
  },
}
