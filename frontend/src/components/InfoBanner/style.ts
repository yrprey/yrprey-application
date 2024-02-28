import styled from "styled-components";

export const StyledInfoBanner = styled.div`
  position: relative;
  width: 540px;
  gap: 20px;
  border-radius: 6px;
  animation: shakeY 40s ease-in-out infinite alternate-reverse both;
  background: var(--grey-0);
`;
export const DivInfoBanner = styled.div`
  display: flex;
  position: absolute;
    top: 0;
    left: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 20px;
  z-index: 2;
  padding: 45px;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: var(--white);
    opacity: .8;
    padding-bottom: 14px;
    text-align: start;
    border-bottom: 1px solid var(--grey-4);
  }
  p {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    text-align: start;
    color: var(--grey-2);
    opacity: .8;
    gap: 10px;
  }
  .icon {
    color: var(--quartenary-color);
  }
`;
