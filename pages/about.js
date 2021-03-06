import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import AboutOne from "@/components/blocks/about-one";
import CallToActionOne from "@/components/blocks/call-to-action-one";
import TeamCarousel from "@/components/blocks/team-carousel";
import VideoOne from "@/components/video-one";
import SubscribeForm from "@/components/blocks/subscribe-form";
import TestimonialsOneCarousel from "@/components/blocks/testimonials-carousel";
import FeatureTabOne from "@/components/blocks/feature-tab-1";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";

const AboutPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="About Us Page">
          <HeaderOne />
          <PageBanner title="About Us" name="About" />
          <AboutOne />
          <TestimonialsOneCarousel />
          <SubscribeForm />
          <TeamCarousel />
          <VideoOne />
          <FeatureTabOne />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AboutPage;
