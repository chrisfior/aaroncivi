// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// We import object and document schemas
import serviceOne from "./documents/blocks/serviceOne"
import serviceTwo from "./documents/blocks/serviceTwo"
import serviceThree from "./documents/blocks/serviceThree"
import serviceHomeTwo from "./documents/blocks/serviceHomeTwo"
import aboutTwo from "./documents/blocks/aboutTwo"
import videoTwo from "./documents/blocks/videoTwo"
import sliderTwo from "./documents/blocks/sliderTwo"
import sliderOne from "./documents/blocks/sliderOne"
import sliderThree from "./documents/blocks/sliderThree"
import subscribeForm from "./documents/blocks/subscribeForm"
import portfolioHome from "./documents/blocks/portfolioHome"
import funFacts from "./documents/blocks/funfacts"
import trustedClient from "./documents/blocks/trustedClient"
import team from "./documents/blocks/team"
import callToActionOne from "./documents/blocks/callToActionOne"
import callToActionTwo from "./documents/blocks/callToActionTwo"
import clients from "./documents/blocks/clients"
import parallax from "./documents/blocks/parallax"
import blogHome from "./documents/blocks/blogHome"
import featureTwo from "./documents/blocks/featureTwo"
import testimonialsCarousel from "./documents/blocks/testimonialsCarousel"
import featureTabOne from "./documents/blocks/featureTabOne"
import googleMap from "./documents/blocks/googleMap"
import contactInfos from "./documents/blocks/contactInfos"

import category from "./documents/category"
import author from "./documents/author"
import navLink from "./documents/navLink"
import post from "./documents/post"
import portfolioPost from "./documents/portfolioPost"
import teamUser from "./documents/teamUser"
import blog from "./documents/blog"
import page from "./documents/page"

import subLink from "./objects/subLink"
import button from "./objects/button"
import sectionContent from "./objects/sectionContent"
import video from "./objects/video"
import funFact from "./objects/funFact"
import social from "./objects/social"
import client from "./objects/client"
import slide from "./objects/slide"
import featurePost from "./objects/featurePost"
import testimonial from "./objects/testimonial"
import featureTabPost from "./objects/featureTabPost"
import contactInfo from "./objects/contactInfo"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    author,
    category,
    navLink,
    serviceOne,
    serviceTwo,
    serviceThree,
    serviceHomeTwo,
    aboutTwo,
    videoTwo,
    sliderOne,
    sliderTwo,
    sliderThree,
    subscribeForm,
    portfolioHome,
    portfolioPost,
    slide,
    post,
    funFacts,
    trustedClient,
    team,
    callToActionOne,
    callToActionTwo,
    teamUser,
    clients,
    parallax,
    blog,
    blogHome,
    featureTwo,
    testimonialsCarousel,
    featureTabOne,
    googleMap,
    contactInfos,
    page,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    subLink,
    button,
    sectionContent,
    video,
    funFact,
    social,
    client,
    featurePost,
    testimonial,
    featureTabPost,
    contactInfo,
  ]),
})
