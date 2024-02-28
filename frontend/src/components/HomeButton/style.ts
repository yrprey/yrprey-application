import styled from "styled-components";

export const HomeButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 3;

    .btn-top, .btn-top:not(:hover){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: var(--gradient-color);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: all ease .3s;
  }

  .btn-top {
  border: none;
  outline: none;
  color: #fff;
  background: var(--gradient-color);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 4px;
  width: 50px;
  height: 50px;
  font: normal 700 34px/34px 'Gilroy', sans-serif;
}

.btn-top:before {
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

.btn-top:active:after {
  background: transparent;
}

.btn-top:hover:before {
  opacity: 1;
}

.btn-top:after {
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
    bottom: 55px;
    right: 8px;
  }
`;
