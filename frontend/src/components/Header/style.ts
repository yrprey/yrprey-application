import styled from "styled-components";

interface IHeaderBg {
  scrolled: boolean;
}

export const HeaderContainer = styled.header<IHeaderBg>`
  height: 5rem;
  z-index: 100;
  top: 0;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: background-color 0.5s ease;
  background-color: ${({ scrolled }) => scrolled ? "var(--grey-5)" : "transparent !important"};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(5px)" : "blur(0px)")};
  .menu-mobile {
    color: #fff;
    width: 26px;
    height: 26px;
    cursor: pointer;
  }
`;

export const DivHeader = styled.div`
  width: 100%;
  height: min-content;
  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
  }
  .content img {
    width: 8.125rem;
  }
  .content nav {
    display: flex;
    gap: 67.5px;
  }

  .link {
    background-color: transparent;
    text-decoration: none;
    color: var(--white);
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;
    transition: all ease .3s;
  }
  .link:hover {
    color: var(--quartenary-color);
  }
  .login, .login:not(:hover) {
    font-weight: bold;
    text-decoration: none;
    position: relative;
    display: flex;
    background-color: transparent;
    text-decoration: none;
    color: var(--white);
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;
    font-family: 'Gilroy', sans-serif;
  }
  .login:after, .login::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--white);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    .login:hover {
      color: var(--quartenary-color);
    }
    .login:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
      background-color: var(--quartenary-color);
    }
  .login-register {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .btn-register {
  border: none;
  outline: none;
  color: var(--white);
  background: var(--gradient-color);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 4px;
  width: 165px;
  height: 56px;
  font: normal 700 16px/16px 'Gilroy', sans-serif;
}

.btn-register:before {
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

.btn-register:active:after {
  background: transparent;
}

.btn-register:hover:before {
  opacity: 1;
}

.btn-register:after {
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
  .content {
    padding: 0 5vw;
  }
  .logo-header {
    height: auto;
  }
}
`;
