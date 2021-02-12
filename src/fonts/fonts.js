import { createGlobalStyle } from 'styled-components';

import GeometriaExtraBoldWoff from './Geometria/Geometria-ExtraBold.woff';
import GeometriaExtraBoldWoff2 from './Geometria/Geometria-ExtraBold.woff2';

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Geometria-ExtraBold', sans-serif;
        src: url(${GeometriaExtraBoldWoff2}) format('woff2'),
          url(${GeometriaExtraBoldWoff}) format('woff');
        font-weight: 800;
        font-style: normal;
        
  font-display: swap;
    }
`;
// @font-face {
//   font-family: 'Geometria-ExtraBold', sans-serif;
//   src: local('Geometria-ExtraBold') url('./Geometria/Geometria-ExtraBold.woff2') format('woff2'),
//        local('Geometria-ExtraBold') url('./Geometria/Geometria-ExtraBold.woff') format('woff');
//   font-weight: 800;
//   font-style: normal;
//   font-display: swap;
// };


// @font-face {
//   font-family: "Gilroy-Light", sans-serif;
//   src: "./Gilroy-FREE/Gilroy-Light.otf" format("otf");
//   font-weight: 300;
//   font-style: normal;
//   font-display: swap;
// }
// @font-face {
//   font-family: "Gilroy-ExtraBold", sans-serif;
//   src: "./Gilroy-FREE/Gilroy-ExtraBold.otf" format("otf");
//   font-weight: 800;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: "Geometria-Light", sans-serif;
//   src: url("./Geometria/Geometria-Light.eot");
//   src: url( "./Geometria/Geometria-Light.eot?#iefix") format('embedded-opentype'),
//   url("./Geometria/Geometria-Light.woff2") format("woff2"),
//   url("./Geometria/Geometria-Light.woff") format("woff"),
//   url("./Geometria/Geometria-Light.ttf") format('truetype');
//   font-weight: 300;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: "Geometria-Bold", sans-serif;
//   src: "./Geometria/Geometria-Bold.ttf" format("truetype"),
//   "./Geometria/Geometria-Bold.woff2" format("woff2"),
//   "./Geometria/Geometria-Bold.woff" format("woff"),
//   "./Geometria/Geometria-Bold.eot" format("eot");
//   font-weight: 700;
//   font-style: normal;
//   font-display: swap;
// };

