import styled from "styled-components";

export const StyledCardShopClean = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3px;
    width: 330px;
    height: 378px;
    background: var(--transpaernt);
    overflow: hidden;
    border: 1px solid var(--grey-6);
    border-radius: 3px;
    text-decoration:none;
    .card-shop-clean {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .link {
      text-decoration:none;
      height: 88%;
      width: 100%;
    }

  .card-img {
    width: 100%;
    height: 88%;
  }
  .card-details {
    padding: 10px 10px;
  }
  .text-title {
    font-size: 1.5em;
    font-weight: bold;
    color: var(--white);
  }
  .card:hover {
    border-color: var(--primary-color);
  }
  @media (max-width: 1024px) {
    width: 330px;
    height: 378px;
    .link {
      height: 80%;
    }

  .card-img {
    height: 100%;
  }
  .text-title {
    font-size: 1.1em;
  }
  }
`;
