import styled, { createGlobalStyle, css } from "styled-components";

const reset = css`
  html, body, div, span, applet, object, iframe,
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
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
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
  /* http://www.paulirish.com/2012/box-sizing-border-box-ftw/ (2015/04/28)*/
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  /* Additional resets */
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
  }
  /* Fix antialiasing */
  *, *:before, *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* Disable user select on everything but texts */
  *, *:before, *:after {
    user-select: none;
  }
  p, h1, h2, h3, h4, h5, h6, blockquote, pre, ul, ol, li, table, tr, th, td, input, textarea {
    user-select: text;
  }
 
`;     

export const GlobalStyle = createGlobalStyle`
  ${reset};
  * {   
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    color: #000;
    background-color: #fff;
    font-family: "Geometria", sans-serif;
    font-weight: 400;
  }

@font-face {
  font-family: "Gilroy-Light", sans-serif;
  src: "./fonts/Gilroy-FREE/Gilroy-Light.otf" format("otf");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Gilroy-ExtraBold", sans-serif;
  src: "./fonts/Gilroy-FREE/Gilroy-ExtraBold.otf" format("otf");
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Geometria-Light", sans-serif;
  src: url("./fonts/Geometria/Geometria-Light.eot");
  src: url( "./fonts/Geometria/Geometria-Light.eot?#iefix") format('embedded-opentype'),
      url("./fonts/Geometria/Geometria-Light.woff2") format("woff2"),
      url("./fonts/Geometria/Geometria-Light.woff") format("woff"),
      url("./fonts/Geometria/Geometria-Light.ttf") format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Geometria", sans-serif;
  src: url( "./fonts/Geometria/Geometria.eot?#iefix") format('embedded-opentype'),
      url("./fonts/Geometria/Geometria.woff2") format("woff2"),
      url("./fonts/Geometria/Geometria.woff") format("woff"),
      url("./fonts/Geometria/Geometria.ttf") format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
};

@font-face {
  font-family: "Geometria-Bold", sans-serif;
  src: url( "./fonts/Geometria/Geometria-Bold.eot?#iefix") format('embedded-opentype'),
      url("./fonts/Geometria/Geometria-Bold.woff2") format("woff2"),
      url("./fonts/Geometria/Geometria-Bold.woff") format("woff"),
      url("./fonts/Geometria/Geometria-Bold.ttf") format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
};

@font-face {
  font-family: 'Geometria-ExtraBold', sans-serif;
  src: url('./fonts/Geometria/Geometria-ExtraBold.woff2') format('woff2'),
       url('./fonts/Geometria/Geometria-ExtraBold.woff') format('woff'),
       url("./fonts/Geometria/Geometria-ExtraBold.ttf") format("truetype");
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}; 

input[type='text'], input[type='number'], input[type='password'], input[type='email'], input[type='tel'] {
  border: 1px solid transparent;
}

input[type='text'], input[type='number'], input[type='password'], input[type='email'], input[type='tel'], textarea, select {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 40px;
  padding: 10px 16px;
  outline: none;
  border-radius: 5px;
  -webkit-transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, -webkit-box-shadow 200ms ease;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, -webkit-box-shadow 200ms ease;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #0d0c22;
  background-color: #f3f7fa;
}

input:hover[type='text'], input:hover[type='number'], input:hover[type='password'], input:hover[type='email'], input:hover[type='tel'], textarea:hover, select:hover {
    background-color: #fff;
    border-color: rgba(0,0,0,0.1);
    -webkit-box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

input:active[type='text'], input:active[type='number'], input:active[type='password'], input:active[type='email'], input:active[type='tel'], textarea:active, select:active {
    background-color: #fff;
    border-color: #e7e7e9;
    -webkit-box-shadow: none;
    box-shadow: none;
}

`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  max-width: calc(1136px + 32px);

  @media screen and (min-width: 600px) {

  }

  @media screen and (min-width: 960px) {

  }
  
  @media screen and (min-width: 1280px) {

  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'Geometria-ExtraBold', sans-serif;
  font-weight: 800;
  font-size: 68px;
  margin-bottom: 20px;
  color: #363b5d;
  @media (max-width: 450px) {
    font-size: 45px;
    margin-bottom: 15px;
  }
`;