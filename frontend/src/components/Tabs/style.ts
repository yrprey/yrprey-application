import styled from "styled-components";

export const StyledTabs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 50%;
  gap: 30px;
  ul.nav {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
  }
  ul.nav li {
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
    color: var(--white);
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    border-bottom: 3px solid var(--white);
  }
  ul.nav li.active {
    color: var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: fit-content;
    gap: 24px;
    ul.nav {
      gap: 24px;
    }
    ul.nav li {
      font-size: 14px;
    }
  }
`;
