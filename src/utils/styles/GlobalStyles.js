// GlobalStyles.js

import { createGlobalStyle } from 'styled-components';
// import dotsBackground from '../../asserts/logos/Banner Background.png';

// Import your font file
import CustomFont from '../../asserts/fonts/GT-Walsheim-Thin-Trial-BF651b7fc728c4c.otf';
import fontBolder from '../../asserts/fonts/GT-Walsheim-Light-Trial-BF651b7fc714941.otf';
import fontBold from '../../asserts/fonts/GT-Walsheim-Medium-Trial-BF651b7fc728fb3.otf';

const GlobalStyles = createGlobalStyle`
  /* Define font-face for custom font */
  @font-face {
    font-family: 'Gt walsheim pro';
    src: url(${fontBolder}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gt walsheim simple';
    src: url(${CustomFont}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Gt walsheim bold';
    src: url(${fontBold}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }


  body {
    font-family: 'Gt walsheim pro', sans-serif;
    background-color: #000;
    color: #fff;
  }
  
`;

export default GlobalStyles;
