import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SliderOneData } from "@/data";
import { urlFor } from "@/utils/sanity";

SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderOne = ({ data = {} }) => {
  const { slides = SliderOneData } = data;
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        {slides.map(({ image, subTitle, title, button }, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${urlFor(image)})` }}
            ></div>
            <Container>
              <Row>
                <Col lg={12} className="text-center">
                  <p className="main-slider__subtext">{subTitle}</p>
                  <h3 className="main-slider__title">{title}</h3>
                  <Link href={button.url}>
                    <a className={`common_btn`}>
                      <span>{button.label}</span>
                    </a>
                  </Link>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev" id="main-slider-prev">
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="swiper-button-next" id="main-slider-next">
          <i className="fa fa-angle-right"></i>
        </div>
      </Swiper>
    </section>
  );
};

export default SliderOne;