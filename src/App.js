import React from "react";

import { GlobalStyle } from "./styles/global.styles";
import { GlobalFonts } from './fonts/fonts';

import Homepage from "./pages/homepage/homepage";

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <Homepage />
    </>
  );
}

export default App;
