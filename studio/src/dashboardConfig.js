export default {
  widgets: [
    { name: "structure-menu" },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "author",
        order: "_createdAt desc",
        types: ["author"],
      },
      layout: { width: "medium" },
    },
  ],
};
