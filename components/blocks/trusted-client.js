import React from "react";
import Link from "next/link";
import { TrustClientData } from "@/data";
import { urlFor } from "@/utils/sanity";

const TrustedClient = ({ data = TrustClientData }) => {
  const { image, title, text, url } = data;
  return (
    <section className={`commonSection trustClient pb_120`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="CL_content">
              <img src={urlFor(image)} alt="" />
              <div className="abc_inner">
                <div className="row">
                  <div className="col-lg-5 col-sm-12 col-md-5"></div>
                  <div className="col-lg-7 col-sm-12 col-md-7">
                    <div className="abci_content">
                      <h2>{title}</h2>
                      <p>{text}</p>
                      <Link href={url}>
                        <a className="common_btn red_bg">
                          <span>Learn More</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClient;
