import React from "react";
import PageBanner from "@/components/page-banner";
import BlogOne from "@/components/blocks/blog-one";
import BlogTwo from "@/components/blocks/blog-two";
import BlogThree from "@/components/blocks/blog-three";
import { useRouter } from "next/router";
import Error from "next/error";
import { getClient } from "@/utils/sanity";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import Layout from "@/components/layout";

const query = `//groq
  *[_type == "blog" && defined(url.current)]
`;

const BlogPage = ({ data }) => {
  const router = useRouter();
  if (!router.isFallback && !data) {
    return <Error statusCode={404} />;
  }

  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Services">
          <PageBanner title="Blog" name="Blog" />
          <BlogOne items={data} />
          <BlogTwo items={data} />
          <BlogThree items={data} />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export async function getStaticProps({ params = {}, preview = false }) {
  const data = await getClient(preview).fetch(query);

  return {
    props: { preview, data },
  };
}

export default BlogPage;
