import { createGlobalStyle, css } from "styled-components";
import type { AppProps } from "next/app";
import Provider from "@/context/context";
import 'aos/dist/aos.css';
import "swiper/css/bundle";
import "animate.css/animate.min.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from 'next/font/google'

const ResetStyles = createGlobalStyle`
  ${() => css`
    html, main, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      font-family: ${montserrat.style.fontFamily};
      vertical-align: baseline;
      scroll-behavior: smooth;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    body::-webkit-scrollbar {
      width: 10px;            
    }

    body::-webkit-scrollbar-track {
      background: var(--tertiary-color);
    }

    body::-webkit-scrollbar-thumb {
      background-color: var(--primary-color);
      border-radius: 20px;       
      border: 3px solid var(--primary-color); 
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
  `}
`;

const GlobalStyles = createGlobalStyle`
  ${() => css`
    :root {
      --primary-color: #FF1A56;
      --secondary-color: #D80B4B;
      --tertiary-color: #a1103e;
      --quartenary-color: #F988A7;
      --gradient-color: linear-gradient(90deg, #FF1A56 0%, #D80B4B 100%);
      --gradient-color-1: linear-gradient(90deg, #D80B4B 0%, #1A1313 100%);
      --gradient-color-2: linear-gradient(90deg, #FF1A56 0%, #af1747 100%);
      --gradient-color-3: linear-gradient(130deg, #FF1A56 40%, #D80B4B 100%);
      --gradient-color-4: linear-gradient(130deg, #FF1A56 0%, #342118 100%);
      --gradient-color-animation: linear-gradient(45deg, #FF1A56, #ff2c6f, #ff4375, #FF1A56, #ff2c6f, #ff4375);
      --grey-0: #28292A;
      --grey-1: #3D3E3F;
      --grey-2: #B7B8B8;
      --grey-3: #29292A;
      --grey-4: #404141;
      --grey-5: #101112;
      --grey-6: #2F2A2C;
      --white: #FFFFFF;
      --black: #000000;
      --transparent: transparent;
    }
    
    html, body, #root {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: var(--grey-5);
    }  
    
    *::selection {
      background-color: var(--primary-color);
      color: var(--white);
      text-shadow: none;
    }
    
    a {
      cursor: pointer;
    }
    
    * {
      box-sizing: border-box;
    }
  `}
`;

const montserrat = Montserrat({
  weight: ['500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimatePresence>
      <Provider>
        <Component {...pageProps} />
        <GlobalStyles />
        <ResetStyles />
      </Provider>
    </AnimatePresence>
  );
};

export default MyApp;
