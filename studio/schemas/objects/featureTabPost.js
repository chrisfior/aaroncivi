export default {
  name: "featureTabPost",
  title: "feature tab Post",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "image",
      title: "image",
      type: "image",
    },
    {
      name: "lists",
      title: "lists",
      type: "array",
      of: [{
        type: "object",
        title: "listItem",
        fields: [
          {
            name: "item",
            title: "item",
            type: "string",
          },
        ]
      }]
    },
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
