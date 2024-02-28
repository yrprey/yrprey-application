import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  .container-input {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .container-button {
    display: flex;
    align-items: center;
    gap: 45px;
  }
  .label {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: var(--grey-2);
  }
  .link, .link:not(:hover) {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: var(--primary-color);
    text-decoration: none;
    transition: all ease .3s;
  }
  .link:hover {
      color: var(--quartenary-color);
  }
  .link-signup, .link-signup:not(:hover) {
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: var(--primary-color);
    text-decoration: none;
    margin-top: 30px;
    transition: all ease .3s;
  }

  .link-signup:hover {
      color: var(--quartenary-color);
  }

  .error {
    width: 90%;
    padding: 8.5px 0;
    background: var(--quartenary-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 13px;
    line-height: 13px;
  }
  .no-error {
    width: 90%;
    min-height: 30px;
  }

  .input-email, .input-email:not(:hover) {
    width: 50%;
    height: 60px;
    padding-left: 20px;
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Gilroy', sans-serif;
    transition: all ease .3s;
    border: 1px solid var(--grey-6);
    border-radius: 2px;
    background-color: transparent;
    color: var(--grey-2);
    outline: none;
  }

  .input-email::placeholder {
    color: var(--grey-2);
  }

  .input-password, .input-password:not(:hover) {
    width: 50%;
    height: 60px;
    padding-left: 20px;
    cursor: pointer;
    z-index: 0;
    font: normal 700 16px/16px 'Gilroy', sans-serif;
    transition: all ease .3s;
    border: 1px solid var(--grey-6);
    border-radius: 2px;
    background-color: transparent;
    color: var(--grey-2);
    outline: none;
  }

  .input-password::placeholder {
    color: var(--grey-2);
  }

  .btn-login {
  border: none;
  outline: none;
  color: #fff;
  background: var(--gradient-color);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 4px;
  margin-top: 30px;
  width: 165px;
  height: 56px;
  font: normal 700 16px/16px 'Gilroy', sans-serif;
}

.btn-login:before {
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

.btn-login:active:after {
  background: transparent;
}

.btn-login:hover:before {
  opacity: 1;
}

.btn-login:after {
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
    .container-input {
      gap: 8px;
    }
    .container-button {
      gap: 25px;
    }
    .label {
      font-size: 14px;
    }
    .link, .link:not(:hover) {
      font-size: 14px;
    }
    .link-signup, .link-signup:not(:hover) {
      font-size: 14px;
      width: 100%;
      text-align: center;
    }
    .error {
      font-size: 12px;
    }
    .no-error {
      width: 100%;
    }
    .input-email, .input-email:not(:hover) {
      padding-left: 10px;
      width: 100%;
    }

    .input-password, .input-password:not(:hover) {
      width: 100%;
      padding-left: 10px;
    }

    .btn-login {
    width: 100%;
    font: normal 700 14px/16px 'Gilroy', sans-serif;
  }
  }
`;
