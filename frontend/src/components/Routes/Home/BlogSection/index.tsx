import AOS from "aos";
import CardBlog from "@/components/CardBlog";
import { StyledBlogSection, ContainerCarousel } from "./style";
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

const BlogSection = () => {
  const { isMobile } = useContext(Context);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <StyledBlogSection id="blog">
      <div className="container-blog">
        <p className="title-blog" data-aos="fade-in">
          Blog
        </p>
        <h4 data-aos="fade">
          Read Our Latest <span>Blog and News</span>
        </h4>
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
                          <CardBlog
                            background_color="var(--grey-0)"
                            details_color={"var(--grey-2)"}
                            link_color={"var(--secondary-color)"}
                            image={"/arrow-red.webp"}
                            title="Protect Your Workplace From Cyber Attacks"
                            text_details="Mynex has been providing managed web, email and co-location an hosting for local small- to medium-sized Businesses."
                            route="/blog"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div data-aos="fade">
                          <CardBlog
                            image={"/axe-red.webp"}
                            title="The Security Risks Of Cyber Changing Package"
                            text_details="Mynex has been providing managed web, email and co-location an hosting for local small- to medium-sized Businesses."
                            route="/blog"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div data-aos="fade">
                          <CardBlog
                            background_color="var(--grey-0)"
                            details_color={"var(--grey-2)"}
                            link_color={"var(--secondary-color)"}
                            image={"/sword-red.webp"}
                            title="Avoid Mistakes In Social And Media Posts"
                            text_details="Mynex has been providing managed web, email and co-location an hosting for local small- to medium-sized Businesses."
                            route="/blog"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </ContainerCarousel>
              </> :
              <>
                <div data-aos="fade-right">
                  <CardBlog
                    background_color="var(--grey-0)"
                    details_color={"var(--grey-2)"}
                    link_color={"var(--secondary-color)"}
                    image={"/arrow-red.webp"}
                    title="Protect Your Workplace From Cyber Attacks"
                    text_details="Mynex has been providing managed web, email and co-location an hosting for local small- to medium-sized Businesses."
                    route="/blog"
                  />
                </div>
                <div data-aos="fade">
                  <CardBlog
                    image={"/axe-red.webp"}
                    title="The Security Risks Of Cyber Changing Package"
                    text_details="Mynex has been providing managed web, email and co-location an hosting for local small- to medium-sized Businesses."
                    route="/blog"
                  />
                </div>
                <div data-aos="fade-left">
                  <CardBlog
                    background_color="var(--grey-0)"
                    details_color={"var(--grey-2)"}
                    link_color={"var(--secondary-color)"}
                    image={"/sword-red.webp"}
                    title="Avoid Mistakes In Social And Media Posts"
                    text_details="Mynex has been providing managed web, email and co-location an hosting for local small- to medium-sized Businesses."
                    route="/blog"
                  />
                </div>
              </>
          }
        </div>
      </div>
    </StyledBlogSection>
  );
}

export default BlogSection;
