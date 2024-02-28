import styled from "styled-components";

export const StyledCardTransactionsSection = styled.div`
width: 100%;
  .card-table {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 78px;
    padding: 15px 30px;
    border-bottom: 0.5px solid var(--grey-4);
    border-top: 0.5px solid var(--grey-4);
  }
  .title {
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: var(--grey-2);
    transition: all ease 
  }
  .value {
    text-decoration: none;
    font-weight: 900;
    font-size: 16px;
    line-height: 16px;
    color: var(--grey-2);
    transition: all ease 
  }
  .content-user {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }
  .user-transaction {
    width: 44px;
    height: 44px;
    border-radius: 9999px;
    border: 2px solid var(--quartenary-color);
    background-color: var(--tertiary-color)
  }
  @media (max-width: 1024px) {
  .card-table {
    padding: 15px 10px;
  }
  .title {
    font-size: 14px;
  }
  .value {
    font-size: 14px;
  }
  }
`;
