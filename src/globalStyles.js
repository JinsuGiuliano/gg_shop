import { createGlobalStyle } from "styled-components";
import { textColor } from "./redux/theme/styles.const";
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
export const GlobalStyle = createGlobalStyle`
  body {
        height:100%;
        margin:0px !important;
        @media screen and (max-width:800px){
            left-padding:10px;
        }
    }
  
  .quick-button{border:2px solid #030303 !important;}
  .quick-button:active{background:#030303 !important;}
  .rcw-conversation-container .rcw-header{background-color:#030303 !important;}
  .rcw-close-button{background-color:#030303 !important;}
  .rcw-full-screen .rcw-close-button{background-color:#000 !important;}
  @media screen and (max-width:800px){
    .rcw-conversation-container .rcw-close-button{background-color:#000 !important}
  }
  .rcw-launcher{background-color:#000 !important;}

.splide {
    padding: 0 !important;
}
.splide__arrow svg {
    fill: #fff;
    }
.splide__pagination__page.is-active {
    background:textColor;
    z-index: 1;
}

@media screen and (max-width:800px){
    .splide__arrow svg {
      display: none;
    }
}
`;
