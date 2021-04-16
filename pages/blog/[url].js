import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import BlogDetails from "@/components/blog-details";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import { getClient, usePreviewSubscription } from "@/utils/sanity";
import { useRouter } from "next/router";
import Error from "next/error";

const query = `*[_type == "blog" && url.current == $url][0]{
  ...,
  "url": url.current
}`;

const BlogTwoPage = ({ data, preview }) => {

  const router = useRouter();
  if (router.isFallback || !data?.url) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <PageBanner title="Blog Details" name="Blog" />
      <BlogDetails data={data} others={[data]} />
    </>
  );
};


export async function getStaticProps({ params, preview = false }) {
  const data = await getClient(preview).fetch(
    query,
    {
      url: params.url,
    },
  );

  return {
    props: { preview, data },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "blog" && defined(url.current)][].url.current`,
  );

  return {
    paths: paths.map((url) => ({ params: { url } })),
    fallback: true,
  };
}

export default BlogTwoPage;
