import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;

  background-color: var(--grey-5);
`;

export const DivOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--gradient-color);
  .container-footer {
    max-width: 1280px;
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 178px;
  }
  .content-left .title {
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    color: var(--white);
  }
  .content-left .paragrafh {
    width: max-content;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--quartenary-color);
  }
  .content-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .content-right div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .error {
    width: 90%;
    padding: 8.5px 0;
    color: var(--quartenary-color);
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  }
  .no-error {
    width: 90%;
    min-height: 30px;
  }
  .input-subscribe, .input-subscribe:not(:hover) {
    width: 282px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 0;
    margin: 0;
    transition: all ease .3s;
    border-radius: 8px 0 0 8px;
    background: #FFF;
    padding-left: 20px;
    cursor: pointer;
    font: normal 700 16px/16px 'Gilroy', sans-serif;
    outline: none;
  }

  .input-subscribe:hover {
    filter: brightness(95%);
  }

  .input-subscribe::placeholder {
      color: var(--grey-4);
  }
  
  .btn-subscribe, .btn-subscribe:not(:hover) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 182px;
    height: 56px;
    border: 0;
    padding: 0;
    margin: 0;
    transition: all ease .3s;
    border-radius: 0 6px 6px 0;
    background: #050A12;  
    font: normal 700 16px/16px 'Gilroy', sans-serif;
    color: var(--white);
    cursor: pointer;
  }

  .btn-subscribe:hover {
    background: var(--grey-5);
  }
  @media (max-width: 1024px) {
  .content-left {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }
  .content-left .title {
    font-size: 24px;
    line-height: 24px;
  }
  .content-left .paragrafh {
    font-size: 14px;
    line-height: 24px;
    width: 100%;
    text-align: center;
  }
  .container-footer {
    padding: 35px 5vw;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: fit-content;
  }
  .content-right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .content-right .error{
    width: 100%;
    text-align: center;
    font-size: 14px;
  }
  .content-right div {
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }
  .input-subscribe, .input-subscribe:not(:hover) {
    width: 100%;
    border-radius: 8px;
  }
  .btn-subscribe, .btn-subscribe:not(:hover) {
    border-radius: 6px;
    width: 100%;
  }
  }
`;

export const DivTwo = styled.div`
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 70px 0 70px 0;
  .content-left {
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 30%;
    gap: 30px;
  }
  .content-left img {
    width: 30%;
    height: auto;
  }
  .content-left p {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--grey-2);
  }
  .content-left div {
    display: flex;
    gap: 10px;
  }
  .content-left ul {
    display: inline-flex;
    list-style: none;
    gap: 10px;
  }
  .content-left ul button {
    background: var(--grey-0);
    color: var(--primary-color);
    border-radius: 9999pc;
    outline: none;
    width: 34px;
    height: 34px;
    font-size: 18px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all ease .3s;
    border: 0;
  }
  .content-left ul button:hover {
    background: var(--gradient-color-2);
    color: var(--white);
    
  }
  .content-right {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 70%;
    height: 50%;
    gap: 30px;
  }
  .content-right div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .content-right div p {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: var(--white);
  }
  .content-right div .link {
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: var(--grey-2);
    transition: all ease .3s;
  }
  .content-right div .link:hover {
    color: var(--quartenary-color);
  }
  @media (max-width: 1024px) {
    padding: 0 5vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 45px 0;
    gap: 32px;
    .content-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: fit-content;
      width: 100%;
      gap: 24px;
    }
    .content-left ul button svg {
      width: 18px;
      height: 18px;
      min-width: 18px;
      min-height: 18px;
  }
    .content-left img {
      width: 50%;
      max-width: 164px;
    }
    .content-left p {
      font-size: 14px;
      line-height: 24px;
      text-align: center;
    }
    .content-right {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: fit-content;
      gap: 30px;
    }
    .content-right div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    .content-right div p {
      font-size: 18px;
    }
    .content-right div .link {
      font-size: 14px;
    }
  }
`;

export const DivTree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 10%;
  padding: 16px 0;
  border-top: 1px solid var(--grey-4);
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: var(--grey-2);
  }
  @media (max-width: 1024px) {
    p {
    font-size: 12px;
  }
  }
`;
