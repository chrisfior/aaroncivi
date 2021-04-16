import S from "@sanity/desk-tool/structure-builder";

// Hide document types that we already have a structure definition for
const hiddenDocTypes = listItem =>
  ![
    "page",
    "aboutTwo",
    "blogHome",
    "clients",
    "funfacts",
    "service",
    "portfolioHome",
    "subscribeForm",
    "team",
    "videoTwo",
    "sliderOne",
    "sliderTwo",
    "parallax",
    "trustedClient",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Aaron")
    .items([
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .child(S.documentTypeList("page").title("Pages")),
      //   S.listItem()
      //     .title("services")
      //     .child(
      //       S.list()
      //         // Sets a title for our new list
      //         .title("services Documents")
      //         // Add items to the array
      //         // Each will pull one of our new singletons
      //         .items([
      //           S.listItem()
      //             .title("title")
      //             .child(
      //               S.document()
      //                 .schemaType("service")
      //                 .documentId("service")
      //             )
      //         ])
      //     ),
      S.listItem()
        .title("entities")
        .child(
          S.list().title('entities').items(
            S.documentTypeListItems().filter(hiddenDocTypes),
          ),
        ),
    ]);
