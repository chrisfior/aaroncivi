export default {
  name: "videoTwo",
  title: "Video Two",
  type: "document",
  fields: [
    {
      name: "sectionContent",
      title: "Section Content",
      type: "sectionContent",
    },
    {
      name: "video",
      title: "video",
      type: "video",
    },
  ],
  preview: {
    select: {
      title: "sectionContent.title"
    }
  }
}
