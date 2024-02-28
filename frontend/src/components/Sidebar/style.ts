import styled from "styled-components";

export const StyledSidebar = styled.div`
`;

export const ContainerSidebar = styled.div`
  @media (max-width: 1024px){
    width: 90vw;
    max-width: 400px;
    right: 0;
    height: 90dvh;
    background-color: var(--grey-5);
    z-index: 990099;
    position:fixed;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  nav {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .link {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--white);
    opacity: 0.7;
    text-decoration: none;
    transition: all ease .3s;
    &:hover {
      color: var(--primary-color);
    }
  }
  .login-register {
    display: flex;
    flex-direction: column;
    gap: 12px;
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
  width: 100%;
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

.login {
  border: none;
  outline: none;
  color: var(--white);
  background: var(--gradient-color);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 4px;
  width: 100%;
  height: 56px;
  font: normal 700 16px/16px 'Gilroy', sans-serif;
}

.login:before {
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

.login:active:after {
  background: transparent;
}

.login:hover:before {
  opacity: 1;
}

.login:after {
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
`;

export const Overlay = styled.div`
  @media (max-width: 1024px){
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 990099;
    background: rgba( 0, 0, 0, 0.35 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    cursor: pointer;
  }
`;