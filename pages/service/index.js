import React from "react";
import PageBanner from "@/components/page-banner";
import ServiceOne from "@/components/blocks/service-one";
import ServiceTwo from "@/components/blocks/service-two";
import ServiceThree from "@/components/blocks/service-three";
import { getClient } from "@/utils/sanity";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import Layout from "@/components/layout";

const query = `//groq
  *[_type == "post" && defined(url.current)]
`;

const ServicePage = ({ posts }) => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Services">
          <PageBanner title="Services" name="Services" />
          <ServiceOne data={{ posts }} />
          <ServiceTwo data={{ posts }} />
          <ServiceThree data={{ posts }} />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export async function getStaticProps({ params = {}, preview = false }) {
  const posts = await getClient(preview).fetch(query);

  return {
    props: { preview, posts },
  };
}

export default ServicePage;
