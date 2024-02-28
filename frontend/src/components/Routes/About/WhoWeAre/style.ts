import styled from "styled-components";

export const StyledWhoWeAreSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  .title {
      color: var(--white);
      font-size: 32px;
      font-weight: 800;
      line-height: 1.22;
      letter-spacing: 0;
      text-transform: none;
      gap: 30px;
      text-align: center;
  }
  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--white);
    opacity: 0.7;
    text-align: center;
  }
  @media (max-width: 1024px) {
    gap: 12px;
    padding: 24px 5vw;
    .title {
      font-size: 24px;
    }
    .text {
      font-size: 14px;
    }
  }
`;
