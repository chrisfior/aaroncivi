export default {
  name: "teamUser",
  title: "Team user",
  type: "document",
  fields: [
    {
      name: "image",
      title: "image",
      type: "image",
    },
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
      name: "url",
      title: "url",
      type: "slug",
    },
    {
      name: "socials",
      title: "socials",
      type: "array",
      of: [{ type: "social" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "designation",
    },
  },
}
