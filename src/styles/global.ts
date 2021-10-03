import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5f;
    --text-body: #969CB3;

    --shape: #FFFFFF;
    
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* não remover o outline por questoes de acessibilidade */
  }
  
  // padrao é 16 px
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14 px
    }

  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }


  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }





`