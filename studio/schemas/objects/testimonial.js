export default {
  name: "testimonial",
  title: "testimonial",
  type: "object",
  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
    },
    {
      name: "designation",
      title: "designation",
      type: "string",
    },
    {
      name: "image",
      title: "image",
      type: "image",
    },
    {
      name: "content",
      title: "content",
      type: "text",
    },
    {
      name: "date",
      title: "date",
      type: "date",
    },
  ],
  preview: {
    select: {
      media: "image",
      title: "name",
      subtitle: "designation",
    },
  },
};
