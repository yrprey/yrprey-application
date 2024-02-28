import styled from "styled-components";

import { ICardBlogStyled } from "@/interfaces/ICardBlog/ICardBlog";

export const StyledCard = styled.div<ICardBlogStyled>`
  width: 370px;
  height: 511px;
  border-radius: 2px;
  background: ${(props) =>
    props.background_color === "var(--grey-0)"
      ? "var(--grey-0)"
      : "var(--gradient-color)"};
  .content-up {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 50%;
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .content-down {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 16px;
    width: 100%;
    height: 50%;
  }
  .content-down div {
    display:flex;
    flex-direction: column;
    gap:20px;
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: var(--white);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .details {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: ${(props) =>
    props.details_color === "var(--grey-2)"
      ? "var(--grey-2)"
      : "var(--quartenary-color)"};
  }
  .link {
    display: flex;
    color: ${(props) =>
    props.link_color === "var(--secondary-color)"
      ? "var(--secondary-color)"
      : "var(--white)"};
    font-weight: bold;
    text-decoration: none;
    position: relative;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    width: max-content;
    :after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${(props) =>
    props.link_color === "var(--secondary-color)"
      ? "var(--secondary-color)"
      : "var(--white)"};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    :hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  @media (max-width: 1024px) {
    width: 345px;
    height: 500px;
    .content-up {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 100%;
      height: 50%;
    }
    .image {
      width: 100%;
      height: 100%;
    }
    .content-down {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 24px 16px;
      width: 100%;
      height: 50%;
    }
    .content-down div {
      display:flex;
      flex-direction: column;
      gap:20px;
    }
    .title {
      font-size: 20px;
    }
    .link {
      margin-top: 8px;
      width: -webkit-fill-available;
    }
  }
`;
