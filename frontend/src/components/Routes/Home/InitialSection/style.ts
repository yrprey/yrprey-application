import styled from "styled-components";

export const StyledInitialSection = styled.div`
  width: 100%;
  max-width: 1280px;
  height: auto;
  padding: 0 40px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  .container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .container img {
    width: 100%;
    height: max-content;
  }
  .container-left {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    gap: 32px;
    margin-bottom: 145px;
  }
  .container-left h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 65px;
    color: var(--white);
    width: 500px;
  }
  .container-left span {
    background: var(--gradient-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .container-left p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--white);
    opacity: 0.7;
  }
  .btn-initial {
  border: none;
  outline: none;
  color: #fff;
  background: var(--gradient-color);
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 4px;
  margin-top: 30px;
  width: 200px;
  height: 56px;
  font: normal 700 16px/16px 'Gilroy', sans-serif;
}

.btn-initial:before {
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

.btn-initial:active:after {
  background: transparent;
}

.btn-initial:hover:before {
  opacity: 1;
}

.btn-initial:after {
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

.container-right {
    display:flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 100%;
  }
  .container-right .image {
    width: 100%;
    height: 100%;
    animation: shake 20s ease-in-out infinite alternate-reverse both;
  }

  @keyframes shake {
        0%, 100% { transform: translateY(-40px); }
        10%, 30%, 50%, 70%, 90% { transform: translateY(-60px); }
        20%, 40%, 60%, 80% { transform: translateY(-40px); }
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
  padding: 0 5vw;
    .container-left {
      width: 100%;
      gap: 24px;
      padding: 110px 0;
      margin-bottom: 0;
    }
    .container-left h1 {
      font-size: 32px;
      line-height: 42px;
      width: fit-content;
    }
    .container-right {
      display: none;
    }
  }
`;
