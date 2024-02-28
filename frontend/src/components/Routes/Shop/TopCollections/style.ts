import styled from "styled-components";

export const ContainerTopCollections = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 30px;
    padding: 60px 0 70px 0;
  }
  .content-title {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    color: var(--white);
  }
  @media (max-width: 1024px) {
  .content {
    gap: 24px;
    padding: 40px 5vw;
  }
  .content-title {
    font-size: 32px;
  }
  }
`;
