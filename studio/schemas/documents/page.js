export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "url",
      type: "slug",
      options: {
        maxLength: 96,
      },
    },
    {
      name: "navigation",
      title: "navigation",
      type: "array",
      of: [{
        type: "reference",
        to: [{ type: "navLink" }],
      }],
    },
    {
      name: "logo",
      title: "logo color",
      type: "string",
      options: {
        list: ["light", "dark"],
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "sliderOne" },
        { type: "sliderTwo" },
        { type: "sliderThree" },
        { type: "aboutTwo" },
        { type: "blogHome" },
        { type: "funfacts" },
        { type: "clients" },
        { type: "portfolioHome" },
        { type: "serviceOne" },
        { type: "serviceTwo" },
        { type: "serviceThree" },
        { type: "serviceHomeTwo" },
        { type: "subscribeForm" },
        { type: "team" },
        { type: "videoTwo" },
        { type: "parallax" },
        { type: "trustedClient" },
        { type: "callToActionOne" },
        { type: "callToActionTwo" },
        { type: "featureTwo" },
        { type: "featureTabOne" },
        { type: "testimonialsCarousel" },
        { type: "googleMap" },
        { type: "contactInfos" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "url.current",
    },
  },
}
