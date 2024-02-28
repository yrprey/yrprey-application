import styled from "styled-components";

export const StyledCounterSection = styled.section`
  width: 100%;
  height: 178px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gradient-color);
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    flex-direction: row;
    max-width: 1280px;
    margin: 0 auto;
  }
  p {
      color: var(--white);
      font-size: 48px;
      font-weight: 800;
      line-height: 1.22;
      letter-spacing: 0;
  }

  span {
    opacity: 0.7;
    font-size: 32px;
    margin-left: 10px;
  }
  @media (max-width: 1024px) {
    height: fit-content;
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 24px 5vw;
    }
    p {
      font-size: 18px;
      min-width: 160px;
    }
    span {
      font-size: 14px;
      margin-left: 6px;
    }
  }
`;
