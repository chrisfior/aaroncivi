import React from "react";
import { getClient } from "@/utils/sanity";
import { useRouter } from "next/router";
import Error from "next/error";
import SearchContextProvider from "@/context/search-context";
import Layout from "@/components/layout";
import MenuContextProvider from "@/context/menu-context";
import RenderBlocks from "@/utils/RenderBlocks";
import HeaderOne from "@/components/header-one";
import Footer from "@/components/footer";

const query = `*[_type == "page" && url.current == $url][0]{
  ...,
  navigation[]->,
  "url": url.current
}`;

const Page = ({ data }) => {
  const router = useRouter();
  if (router.isFallback || !data?.url) {
    return <Error statusCode={404} />;
  }

  const { title, content, navigation, logo } = data;

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle={title}>
          <HeaderOne NavLinks={navigation} logo={logo} />
          {content && <RenderBlocks blocks={content} />}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export async function getStaticProps({ params = {}, preview = false }) {
  const client = getClient(preview);
  const data = await client.fetch(query, { url: params.index });

  return {
    props: {
      preview,
      data,
    },
  };
}


export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "page" && defined(url.current)][].url.current`,
  );

  return {
    paths: paths.map((url) => ({ params: { index: url } })),
    fallback: true,
  };
}

export default Page;
