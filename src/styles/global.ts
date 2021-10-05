import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363F5f;
    --text-body: #969CB3;

    --shape: #FFFFFF;

    --input-background: #E7E9EE;
    --border-input: #d7d7d7;
    
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

  // por eles nao importarem as fontes precisamos fazer isso: 
  body,input, textarea, button {
    font-family: 'Poppins', sans-serif;

    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;

    /* para ocupar tudo */
    top:0;
    bottom:0;
    left: 0;
    right: 0;


    /* alinhando itens */

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width:576px;
    background:  var(--background);
    padding: 3rem;
    position: relative;

    border-radius: 0.5rem;
    font-weight: 400;
  }


  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8)
    }
  }
`


