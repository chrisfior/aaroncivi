// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import category from './documents/category'
import author from './documents/author'
import navLink from './documents/navLink'
import service from './documents/blocks/service'
import aboutTwo from './documents/blocks/aboutTwo'
import post from './documents/post'
import videoTwo from './documents/blocks/videoTwo'
import sliderTwo from './documents/blocks/sliderTwo'
import sliderOne from './documents/blocks/sliderOne'
import subscribeForm from './documents/blocks/subscribeForm'
import portfolioHome from './documents/blocks/portfolioHome'
import portfolioPost from './documents/portfolioPost'
import funFacts from './documents/blocks/funfacts'
import trustedClient from './documents/blocks/trustedClient'
import team from './documents/blocks/team'
import teamUser from './documents/teamUser'
import clients from './documents/blocks/clients'
import parallax from './documents/blocks/parallax'
import blog from './documents/blog'
import blogHome from './documents/blocks/blogHome'
import page from './documents/page'

import subLink from './objects/subLink'
import button from './objects/button'
import sectionContent from './objects/sectionContent'
import video from './objects/video'
import funFact from './objects/funFact'
import social from './objects/social'
import client from './objects/client'
import slide from './objects/slide'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    author,
    category,
    navLink,
    service,
    aboutTwo,
    videoTwo,
    sliderOne,
    sliderTwo,
    subscribeForm,
    portfolioHome,
    portfolioPost,
    slide,
    post,
    funFacts,
    trustedClient,
    team,
    teamUser,
    clients,
    parallax,
    blog,
    blogHome,
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
  ]),
})
