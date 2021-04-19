export default {
  name: "callToActionTwo",
  title: "Call To Action Two",
  type: "document",
  fields: [
    {
      name: "items",
      title: "items",
      type: "array",
      of: [{
        type: "object",
        fields: [
          {
            name: "label",
            title: "label",
            type: "string",
          },
          {
            name: "url",
            title: "url",
            type: "string",
          },
        ],
      }],
    },
  ],
}
