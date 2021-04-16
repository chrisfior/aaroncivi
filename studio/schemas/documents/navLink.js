export default {
  name: "navLink",
  title: "Navigation Link",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
    {
      name: "subItems",
      title: "subItems",
      type: "array",
      of: [{ type: "subLink" }],
    },
  ],
};
