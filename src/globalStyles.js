import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
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
  
`