import React from "react";
import PageBanner from "@/components/page-banner";
import { getClient } from "@/utils/sanity";
import { useRouter } from "next/router";
import Error from "next/error";
import ServiceDetails from "@/components/service-details";
import CallToActionOne from "@/components/blocks/call-to-action-one";

const query = `*[_type == "post" && url.current == $url][0]{
  ...,
  "url": url.current
}`;

const ServiceDetailsPage = ({ data, preview }) => {

  const router = useRouter();
  if (router.isFallback || !data?.url) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <PageBanner title="Service Details" name="Service" />
      <ServiceDetails data={data} />
      <CallToActionOne extraClassName="ready" />
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
    `*[_type == "post" && defined(url.current)][].url.current`,
  );

  return {
    paths: paths.map((url) => ({ params: { url } })),
    fallback: true,
  };
}

export default ServiceDetailsPage;
