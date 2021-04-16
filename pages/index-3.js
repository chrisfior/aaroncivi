import React from "react";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import AboutTwo from "@/components/blocks/about-two";
import VideoTwo from "@/components/blocks/video-two";
import SubscribeForm from "@/components/blocks/subscribe-form";
import ServiceHomeThree from "@/components/service-home-three";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";
import PortfolioHome from "@/components/blocks/portfolio-home";
import FunfactOne from "@/components/blocks/funfact-one";
import TrustedClient from "@/components/blocks/trusted-client";
import TeamCarousel from "@/components/blocks/team-carousel";
import ClientCarouselOne from "@/components/blocks/client-carousel-one";
import ParallaxOne from "@/components/blocks/parallax-1";
import BlogHome from "@/components/blocks/blog-home";
import GoogleMap from "@/components/google-map";
import CallToActionTwo from "@/components/call-to-action-two";
import ContactInfos from "@/components/contact-infos";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import HeaderOne from "@/components/header-one";
import SliderThree from "@/components/slider-three";

const HomeThree = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home Three">
          <HeaderOne />
          <SliderThree />
          <AboutTwo />
          <VideoTwo />
          <SubscribeForm />
          <ServiceHomeThree />
          <TestimonialsOneCarousel />
          <PortfolioHome />
          <FunfactOne />
          <TrustedClient extraClassName="pb_120" />
          <TeamCarousel />
          <ClientCarouselOne />
          <ParallaxOne />
          <BlogHome />
          <GoogleMap extraClass="contact-page" />
          <CallToActionTwo />
          <ContactInfos />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeThree;
