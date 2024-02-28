import styled from "styled-components";

export const StyledShopSection = styled.div`
  width: 100%;
  height: auto;
  max-width: 1280px;
  padding: 45px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container-shop {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
  .title-shop {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    text-decoration-line: underline;
    color: var(--white);
  }
  h3 {
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    text-align: center;
    color: var(--white);
    padding: 0 5vw;
  }
  h3 span {
    background: var(--primary-color);
    background: var(--gradient-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .content-center {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .btn-view-more {
  border: none;
  outline: none;
  color: #fff;
  background: var(--gradient-color);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 4px;
  margin-top: 30px;
  width: 165px;
  height: 56px;
  font: normal 700 16px/16px 'Gilroy', sans-serif;
}

.btn-view-more:before {
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

.btn-view-more:active:after {
  background: transparent;
}

.btn-view-more:hover:before {
  opacity: 1;
}

.btn-view-more:after {
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
@media (max-width: 1024px) {
    padding: 40px 5vw;
    .container-shop {
      gap: 24px;
    }
    h3 {
      font-size: 32px;
      line-height: 42px;
    }
    .content-center {
      gap: 18px;
    }
  }
`;

export const ContainerCarousel = styled.div`
  width: 100%;
  height: auto;
  .content {
    width: 100vw;
  }
  .swiper {
    width: 100%;
    height: 400px;
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
  .swiper-slide div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  }
`;