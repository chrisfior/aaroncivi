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

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home One">
          <HeaderOne />
          <SliderOne />
          <ServiceTwo />
          <AboutTwo />
          <VideoTwo />
          <SubscribeForm />
          <PortfolioHome />
          <FunfactOne />
          <TrustedClient />
          <TeamCarousel />
          <ClientCarouselOne />
          <ParallaxOne />
          <BlogHome />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
