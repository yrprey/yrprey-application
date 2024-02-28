import styled from "styled-components";

export const StyledTransactionsSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  padding: 40px;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  h1 {
    color: var(--white);
    font-size: 48px;
    font-weight: 800;
    line-height: 1.22;
    letter-spacing: 0;
    text-transform: none;
    margin-bottom: 40px;
    gap: 30px;
    text-align: center;
  }
  p {
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: var(--grey-2);
  }
  @media (max-width: 1024px) {
    padding: 20px 5vw 40px 5vw;
  h1 {
    font-size: 28px;
    margin-bottom: 32px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
  }
  }
`;
