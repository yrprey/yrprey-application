import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { HiOutlineStatusOnline } from "react-icons/hi";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { ContainerCarousel } from "./style";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

interface Slide {
  image: string;
  type: string;
  id: string;
}

const Carousel = () => {
  const [slides, setSlides] = useState<Slide[]>([] as Slide[]);

  function getDataAtualFormatada() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, "0");
    const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
    const ano = String(dataAtual.getFullYear()).slice(-2); // Pegando apenas os dois últimos dígitos do ano
    return `${dia} - ${mes} - ${ano}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post<{ results: Slide[] }>(
          `${process.env.NEXT_PUBLIC_API}/resposta`,
          {
            id: "1",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        response;
        setSlides(response.data.results);
      } catch (error) {
        error;
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContainerCarousel>
        <div className="content">
          <Swiper
            spaceBetween={30}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="container-carousel">
                  <Image
                    className="img-carousel"
                    src={`/slide-${
                      slide.image
                        .match(/slide-(.*?)\.webp/)?.[1]
                        .split("-")
                        .pop() || ""
                    }.webp`}
                    width={1000}
                    height={1000}
                    alt="img-carousel"
                    unoptimized
                  />
                  <div className="content-carousel">
                    <button className="carousel-status" disabled>
                      <HiOutlineStatusOnline className="icon" />
                      Active now
                    </button>
                    <p className="carousel-date">{getDataAtualFormatada()}</p>
                    <h2 className="carousel-title">
                      YRprey-{" "}
                      {slide.image
                        .match(/slide-(.*?)\.webp/)?.[1]
                        .split("-")
                        .pop()}
                    </h2>
                    <p className="carousel-details">
                      Collection -{" "}
                      {slide.image
                        .match(/slide-(.*?)\.webp/)?.[1]
                        .split("-")
                        .pop()}
                    </p>
                    <Link
                      href={
                        "/shop/collection/" +
                        (slide.image
                          .match(/slide-(.*?)\.webp/)?.[1]
                          .split("-")
                          .pop() || "")
                      }
                      className="carousel-button"
                    >
                      <button className="carousel-button">See drop</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContainerCarousel>
    </motion.div>
  );
};

export default Carousel;
