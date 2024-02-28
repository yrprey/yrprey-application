import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
  .error-column {
    width: 90%;
    padding: 8.5px 0;
    background: var(--quartenary-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 13px;
    line-height: 13px;
  }
  .error-row {
    width: 100%;
    padding: 8.5px 0;
    background: var(--quartenary-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 13px;
    line-height: 13px;
  }
  .no-error-column {
    width: 90%;
    min-height: 30px;
  }
  .no-error-row {
    width: 100%;
    min-height: 30px;
  }
  .input-name {
    box-sizing: border-box;
    width: 90%;
    height: 56px;
    border: 1px solid var(--grey-6);
    border-radius: 2px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    padding-left: 20px;
    background-color: transparent;
    color: var(--grey-2);
    outline: none;
    font-family: 'Gilroy', sans-serif;
  }
  .input-subject {
    box-sizing: border-box;
    width: 90%;
    height: 56px;
    border: 1px solid var(--grey-6);
    border-radius: 2px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    padding-left: 20px;
    background-color: transparent;
    color: var(--grey-2);
    outline: none;
    font-family: 'Gilroy', sans-serif;
  }
  textarea {
    box-sizing: border-box;
    width: 90%;
    height: 140px;
    border: 1px solid var(--grey-6);
    color: var(--grey-6);
    border-radius: 2px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    padding: 20px;
    font-family: "bakbakone", sans-serif;
    background-color: transparent;
    color: var(--grey-2);
    outline: none;
    resize: none;
    font-family: 'Gilroy', sans-serif;
    transition: all ease .3s;
  }
  .btn-send-message {
  border: none;
  outline: none;
  color: #fff;
  background: var(--gradient-color);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 4px;
  margin-top: 30px;
  width: 90%;
  height: 56px;
  font: normal 700 16px/16px 'Gilroy', sans-serif;
}

.btn-send-message:before {
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

.btn-send-message:active:after {
  background: transparent;
}

.btn-send-message:hover:before {
  opacity: 1;
}

.btn-send-message:after {
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

  .input-contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    gap: 20px;
    outline: none;
  }
  .input-contact div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
  .input-contact div input {
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    border: 1px solid var(--grey-6);
    border-radius: 2px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    padding-left: 20px;
    background-color: transparent;
    color: var(--grey-2);
    outline: none;
    font-family: 'Gilroy', sans-serif;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  @media (max-width: 1024px) {
    .error-column {
      width: 100%;
      padding: 8px 0;
      font-size: 12px;
      line-height: 12px;
    }
    .error-row {
      width: 100%;
      padding: 8px 0;
      font-size: 12px;
      line-height: 12px;
    }
    .no-error-column {
      width: 100%;
      min-height: 30px;
    }
    .no-error-row {
      width: 100%;
      min-height: 30px;
    }
    .input-name {
      width: 100%;
      font-size: 16px;
      line-height: 16px;
      padding-left: 10px;
    }
    .input-subject {
      width: 100%;
      font-size: 16px;
      line-height: 16px;
      padding-left: 10px;
    }
    textarea {
      width: 100%;
      font-size: 16px;
      line-height: 16px;
      padding-left: 10px;
    }
    .btn-send-message {
      margin-top: 30px;
      width: 100%;
      font: normal 700 14px/16px 'Gilroy', sans-serif;
    }

    .input-contact {
      width: 100%;
      gap: 18px;
    }
    .input-contact div {
      width: 100%;
    }
    .input-contact div input {
      font-size: 16px;
      line-height: 16px;
      padding-left: 10px;
    }
  }
`;
