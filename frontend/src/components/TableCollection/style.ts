import styled from "styled-components";

export const StyledTableCollection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: var(--grey-2);
  .content-table {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .scope-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 78px;
    padding: 15px 30px;
  }
  .scope-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 87%;
    gap: 50px;
  }
  .scope-content p {
    width: 33.333333333333%;
  }
  .container-img {
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
  }
  .img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
  .table-content {
    width: 100%;
  }
  .card-table {
    width: 87%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
  .card-table-static {
    width: 33.333333333333%;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 78px;
    padding: 15px 30px;
    border-bottom: 0.5px solid var(--grey-4);
    border-top: 0.5px solid var(--grey-4);
  }
  .collection-details {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 33.333333333333%;
  }
  .collection-details p {
  }
  .collection-details div {
    padding: 0 10px;
  }
  .collection-details h2 {
    display: flex;
    align-items: center;
    font-weight: 700;
    width: 65%;
  }
  .collection-details img {
  }
  .collection-details span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .checked {
    color: var(--tertiary-color);
  }
  .eth {
    color: var(--grey-1);
  }
  .btn-top-collections {
  border: none;
  outline: none;
  color: var(--white);
  background: var(--gradient-color);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 4px;
  width: 145px;
  height: 50px;
  font: normal 700 16px/16px 'Gilroy', sans-serif;
}

.btn-top-collections:before {
  content: '';
  background: var(--gradient-color-animation);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  border-radius: 4px;
}

.btn-top-collections:active:after {
  background: transparent;
}

.btn-top-collections:hover:before {
  opacity: 1;
}

.btn-top-collections:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--gradient-color);
  left: 0;
  top: 0;
  border-radius: 4px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}
@media (max-width: 1024px) {
  .scope-container {
    height: 40px;
    padding: 15px 0;
  }
  .scope-content {
    width: 100%;
    gap: 8px;
  }
  .scope-content p {
    font-size: 14px;
  }
  .img {
    width: 46px;
    height: 46px;
  }
  .card-table {
    width: 100%;
    gap: 8px;
  }
  .card-table-static {
    width: 18.3333333333333333%
  }
  li {
    height: 70px;
    padding: 15px 0;
  }
  .collection-details {
    width: fit-content;
  }
  .collection-details div {
    padding: 0 8px;
  }
  .collection-details h4 {
    display: none;
  }
  .btn-top-collections {
  width: 40px;
  height: 40px;
  text-align: center;
}
}
`;
