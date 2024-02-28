import styled from "styled-components";

export const StyledCardShop = styled.div`
.trash:hover {
  color: var(--tertiary-color);
  cursor: pointer;
}
  .card-container-shop {
    background-color: transparent;
    width: 258px;
    height: 258px;
    perspective: 1000px;
    list-style: none;
  }
  .card-container-shop:hover .flip-card-inner{
    transform: rotateY(180deg);
  }
  .img-card-shop {
    width: 100%;
    height: 100%;
  }
  .text-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 5px;
  }
  .text-content div {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .text-title {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: var(--tertiary-color);
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  .text-title span {
    font-size: 18px;
    font-weight: bold;
    color: var(--tertiary-color);
    display: flex;
    align-items: center;
  }
  .text-name-item {
    color: var(--grey-2);
    font-size: 16px;
  }
  .text-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .text-details p:first-child {
    color: var(--grey-2);
    font-size: 16px;
  }
  .text-details p:last-child {
    font-size: 26px;
  }
  .container-button {
    width: 100%;
    height: min-content;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
  }
  .checked {
    color: var(--tertiary-color);
  }
  .eth {
    font-size: 18px;
    font-weight: bold;
    color: var(--grey-1);
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .flip-card-front {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid var(--grey-6);
    border-radius: 3px;
    color: var(--white);
  }
  .flip-card-front {
    background-color: var(--transparent);
  }
  .flip-card-front div {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    border-radius: 3px;
  }
  .flip-card-front div img {
    width: 100%;
  }
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid var(--grey-6);
    border-radius: 3px;
    color: var(--white);
    padding: 30px 20px;
    gap: 10px;
  }
  .flip-card-back {
    background-color: var(--transparent);
    transform: rotateY(180deg);
  }
  .btn-puschase-item {
  border: none;
  outline: none;
  color: var(--white);
  background: var(--gradient-color);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 4px;
  width: 100%;
  height: 45px;
  font: normal 700 16px/16px 'Gilroy', sans-serif;
}

.btn-puschase-item:before {
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

.btn-puschase-item:active:after {
  background: transparent;
}

.btn-puschase-item:hover:before {
  opacity: 1;
}

.btn-puschase-item:after {
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
  .card-container-shop {
    background-color: transparent;
    width: 258px;
    height: 258px;
    perspective: 1000px;
    list-style: none;
  }
  .text-name-item {
    font-size: 14px;
  }
  .text-details p:first-child {
    font-size: 14px;
  }
  .text-details p:last-child {
    font-size: 24px;
  }
  .container-button {
    gap: 16px;
  }
  .eth {
    font-size: 16px;
  }

  .flip-card-back {
    padding: 20px 16px;
  }
  .btn-puschase-item {
    font: normal 700 14px/16px 'Gilroy', sans-serif;
  }
}
`;