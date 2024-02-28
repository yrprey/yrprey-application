import styled from "styled-components";

export const StyledStatusApi = styled.div`
    position: fixed;
    top: 4px;
    right: 4px;
    width: 98px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    z-index: 99999;
    p {
      color: #fff;
      font-size: 14px;
    }
    @media (max-width: 1024px) {
      position: static;
      width: 100%;
      z-index: 1;
    }
`;
