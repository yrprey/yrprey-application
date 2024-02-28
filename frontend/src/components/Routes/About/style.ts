import styled from "styled-components";

export const StyledAboutSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .content h1 {
    color: var(--white);
    font-size: 48px;
    font-weight: 800;
    line-height: 1.22;
    letter-spacing: 0;
    text-transform: none;
    gap: 30px;
    text-align: center;
    padding: 40px;
  }
  @media (max-width: 1024px) {
    .content h1 {
      font-size: 28px;
      padding: 20px 5vw 30px 5vw;
    }
  }
`;
