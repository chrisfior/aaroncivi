export default {
  name: "portfolioPost",
  title: "Portfolio post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
    },
    {
      name: "image",
      title: "image",
      type: "image",
    },
    {
      name: "url",
      title: "url",
      type: "slug",
    },
    {
      name: "categories",
      title: "categories",
      type: "array",
      of: [{
        type: "reference",
        to: { type: "category" },
      }],
    },
  ],
}
