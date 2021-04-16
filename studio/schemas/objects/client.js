export default {
  name: "client",
  title: "client",
  type: "object",
  fields: [
    {
      name: "image",
      title: "image",
      type: "image",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
  ],
  preview: {
    select: {
      media: "image",
    },
  },
};
