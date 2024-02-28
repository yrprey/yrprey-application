import styled from "styled-components";

export const ContainerCarousel = styled.div`
  width: 100%;
  height: auto;

  .content {
    width: 100%;
  }

  .content-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .content-title {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    color: var(--white);
  }

  .content-details {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: var(--white);
  }

  .container-carousel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 80px);
  }

  .content-carousel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 20px;
  }

  .carousel-status {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    color: var(--white);
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    padding: 12px;
    border-radius: 30px;
    text-transform: uppercase;
    background: var(--gradient-color-3);
    border: 0;
  }

  .icon {
    font-size: 24px;
  }

  .carousel-date {
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    color: var(--white);
  }

  .carousel-title {
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    color: var(--white);
  }

  .carousel-details {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: var(--primary-color);
  }

  .carousel-button {
  border: none;
  outline: none;
  color: var(--white);
  background: var(--gradient-color);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 4px;
  width: 165px;
  height: 50px;
  font: normal 700 16px/16px 'Gilroy', sans-serif;
}

.carousel-button:before {
  content: '';
  background: var(--gradient-color-animation);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  border-radius: 4px;
}

.carousel-button:active:after {
  background: transparent;
}

.carousel-button:hover:before {
  opacity: 1;
}

.carousel-button:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--gradient-color);
  left: 0;
  top: 0;
  border-radius: 4px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}

  .container-right {
    width: 65%;
    height: 100%;
  }

  .container-right .image {
    width: 100%;
    height: max-content;
    animation: shakeY 20s ease-in-out infinite alternate-reverse both;
  }

  .img-carousel {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next,
  .swiper-button-prev:not(:hover),
  .swiper-button-next:not(:hover) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--gradient-color-2);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: all ease 0.3s;
    border-radius: 4px;
  }

  .swiper-button-prev::after, .swiper-button-next::after {
    filter: sepia(100%) brightness(200%) saturate(0%) contrast(1000%);
    font-size: 20px;
  }

  .swiper-pagination-bullet {
    border-radius: 4px;
    margin: 0 8px 0 8px !important;
    padding: 0;
    width: 32px;
    height: 6px;
    border: 0.;
    background: var(--secondary-color);
    transition: all ease 0.3s;
    opacity: .5;
  }

  .swiper-pagination-bullet-active {
    border: 0;
    opacity: 1;
    background: var(--primary-color);
  }
  @media (max-width: 1024px)  {
  .content-text {
    gap: 12px;
  }

  .content-title {
    font-size: 32px;
  }

  .content-details {
    font-size: 18px;
  }

  .container-carousel {
    height: 300px;
  }

  .content-carousel {
    gap: 12px;
    height: auto;
  }

  .carousel-status {
    font-size: 12px;
    line-height: 16px;
    padding: 8px;
    border-radius: 30px;
  }

  .icon {
    font-size: 20px;
  }

  .carousel-date {
    font-size: 16px;
  }

  .carousel-title {
    font-size: 24px;
  }

  .carousel-details {
    font-size: 16px;
  }

  .carousel-button {
  width: 116px;
  height: 46px;
  font: normal 700 14px/16px 'Gilroy', sans-serif;
}

.carousel-button:before {
  content: '';
  background: var(--gradient-color-animation);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  border-radius: 4px;
}

  .swiper-button-prev,
  .swiper-button-next,
  .swiper-button-prev:not(:hover),
  .swiper-button-next:not(:hover) {
    width: 30px;
    height: 30px;
  }

  .swiper-button-prev::after, .swiper-button-next::after {
    font-size: 10px;
  }

  .swiper-pagination-bullet {
    width: 24px;
    height: 4px;
  }
  .img-carousel {
    object-fit: cover;
  }
  }
`;