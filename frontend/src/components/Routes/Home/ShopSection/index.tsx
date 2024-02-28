import AOS from "aos";
import { StyledShopSection, ContainerCarousel } from "./style";
import { useContext, useEffect } from "react";
import { Context } from "@/context/context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

import CardShopClean from "@/components/SimpleShopCard";

const ShopSection = () => {
  const { router, isMobile } = useContext(Context);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <StyledShopSection>
      <div className="container-shop">
        <p className="title-shop" data-aos="fade-in">
          Shop
        </p>
        <h3 data-aos="fade">
          Buy, trade and hold <span>100+ Collectibles</span> on YRYRPrey
        </h3>
        <div className="content-center">
          {
            isMobile ?
              <>
                <ContainerCarousel>
                  <div className="content">
                    <Swiper
                      spaceBetween={30}
                      navigation
                      pagination={{ clickable: true }}
                      className="mySwiper"
                      slidesPerView={1}     
                    >
                      <SwiperSlide>
                        <div data-aos="fade">
                          <CardShopClean
                            image={"/map-red.webp"}
                            title_image={"book"}
                            title="YRPrey Club Red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div data-aos="fade">
                          <CardShopClean
                            image={"/potion-red.webp"}
                            title_image={"potion"}
                            title="YRPrey Club Red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div data-aos="fade">
                          <CardShopClean
                            image={"/map-red.webp"}
                            title_image={"map"}
                            title="YRPrey Club Red"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </ContainerCarousel>
              </> :
              <>
                <div data-aos="fade-down-right">
                  <CardShopClean
                    image={"/map-red.webp"}
                    title_image={"book"}
                    title="YRPrey Club Red"
                  />
                </div>
                <div data-aos="fade">
                  <CardShopClean
                    image={"/potion-red.webp"}
                    title_image={"potion"}
                    title="YRPrey Club Red"
                  />
                </div>
                <div data-aos="fade-down-left">
                  <CardShopClean
                    image={"/map-red.webp"}
                    title_image={"map"}
                    title="YRPrey Club Red"
                  />
                </div>
              </>
          }
        </div>
        <button className="btn-view-more" onClick={() => router.push("/shop")}>
          View more
        </button>
      </div>
    </StyledShopSection>
  );
};

export default ShopSection;
