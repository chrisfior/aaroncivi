export default {
  name: "contactInfo",
  title: "contact Info",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "infos",
      title: "infos",
      type: "array",
      of: [{
        type: "object",
        fields: [
          {
            name: "name",
            title: "name",
            type: "string",
          },
        ],
      }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
}
