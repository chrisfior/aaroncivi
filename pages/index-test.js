import React from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/call-to-action-one";
import Footer from "@/components/footer";
import BlogHome from "@/components/blocks/blog-home";
import ParallaxOne from "@/components/blocks/parallax-1";
import ClientCarouselOne from "@/components/blocks/client-carousel-one";
import TeamCarousel from "@/components/blocks/team-carousel";
import FunfactOne from "@/components/blocks/funfact-one";
import TrustedClient from "@/components/blocks/trusted-client";
import PortfolioHome from "@/components/blocks/portfolio-home";
import SubscribeForm from "@/components/blocks/subscribe-form";
import ServiceTwo from "@/components/blocks/service-two";
import AboutTwo from "@/components/blocks/about-two";
import VideoTwo from "@/components/blocks/video-two";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import SliderOne from "@/components/blocks/slider-one";

import { getClient } from "@/utils/sanity";

const query = `//groq
  *[_type == "navLink"]
`;

const sliderQuery = `//groq
  *[_type == "sliderTwo"][0]
`;

const serviceQuery = `//groq
  *[_type == "service"][0]{
    sectionContent,
    posts[]->{
      "url": url.current,
      iconName,
      title
    }
  }
`;

const aboutTwoQuery = `//groq
  *[_type == "aboutTwo"][0]
`;

const videoTwoQuery = `//groq
  *[_type == "videoTwo"][0]
`;

const subscribeFormQuery = `//groq
  *[_type == "subscribeForm"][0]
`;

const portfolioQuery = `//groq
  *[_type == "portfolioHome"][0]{
    sectionContent,
    portfolioPosts[]->{
      "url": url.current,
      image,
      title,
      categories[]->
    }
  }
`;

const funfactsQuery = `//groq
  *[_type == "funfacts"][0]
`;

const trustedClientQuery = `//groq
  *[_type == "trustedClient"][0]
`;

const teamQuery = `//groq
  *[_type == "team"][0]{
    ...,
    users[]->
  }
`;

const clientsQuery = `//groq
  *[_type == "clients"][0]
`;

const parallaxQuery = `//groq
  *[_type == "parallax"][0]
`

const blogHomeQuery = `//groq
  *[_type == "blogHome"][0]{
    sectionContent,
    blogs[]->
  }
`;

const HomeOne = (props) => {
  const {
    navLinksData,
    slidesData,
    serviceData,
    aboutTwoData,
    videoTwoData,
    subscribeFormData,
    portfolioData,
    funFactData,
    trustedClientData,
    teamData,
    clientsData,
    parallaxData,
    blogHomeData,
  } = props;

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home One">
          <HeaderOne NavLinks={navLinksData} />
          <SliderOne data={slidesData} />
          <ServiceTwo data={serviceData} />
          <AboutTwo data={aboutTwoData} />
          <VideoTwo data={videoTwoData} />
          <SubscribeForm data={subscribeFormData} />
          <PortfolioHome data={portfolioData} />
          <FunfactOne data={funFactData.funfacts} />
          <TrustedClient data={trustedClientData} />
          <TeamCarousel data={teamData} />
          <ClientCarouselOne data={clientsData} />
          <ParallaxOne data={parallaxData} />
          <BlogHome data={blogHomeData} />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export async function getStaticProps({ params = {}, preview = false }) {
  const client = getClient(preview);
  const [
    navLinksData,
    slidesData,
    serviceData,
    aboutTwoData,
    videoTwoData,
    subscribeFormData,
    portfolioData,
    funFactData,
    trustedClientData,
    teamData,
    clientsData,
    parallaxData,
    blogHomeData,
  ] = await Promise.all([
    client.fetch(query),
    client.fetch(sliderQuery),
    client.fetch(serviceQuery),
    client.fetch(aboutTwoQuery),
    client.fetch(videoTwoQuery),
    client.fetch(subscribeFormQuery),
    client.fetch(portfolioQuery),
    client.fetch(funfactsQuery),
    client.fetch(trustedClientQuery),
    client.fetch(teamQuery),
    client.fetch(clientsQuery),
    client.fetch(parallaxQuery),
    client.fetch(blogHomeQuery),
  ]);

  return {
    props: {
      preview,
      navLinksData,
      slidesData,
      serviceData,
      aboutTwoData,
      videoTwoData,
      subscribeFormData,
      portfolioData,
      funFactData,
      trustedClientData,
      teamData,
      clientsData,
      parallaxData,
      blogHomeData,
    },
  };
}

export default HomeOne;
