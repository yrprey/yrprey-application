import styled from "styled-components";

export const StyledCollectionsSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 20px 0;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (max-width: 1024px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 20px 0;
    padding: 0 5vw;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  }
`;
