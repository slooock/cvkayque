import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background:#5352d4;
    --red: #E52E4D;
    --blue: #5429CC;
    --green:#33CC95;
    --blue-light: #6933FF;
    --text-title:#363F5F;
    --text-body: #969CB3;
    --shape:#FFFFFF;
    display: flex;
    justify-content: center;
  }
  
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  //font-size 16px;(Desktop)
  //16*0,93m
html{
  scroll-behavior: smooth;
  @media(max-width: 1080px){
    font-size:93.75%;//15
  }

  @media(max-width: 720px){
    font-size:87.5%;//14
  }
}

//REM  = 1rem = font-size da minha pagina 

  body{
    background:var(--background);
    -webkit-font-smoothing:antialiased;//Deixamos q a fontes fiquem mais detalhadas 
  }

body,input,textArea,button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight:600;
}

button{
  cursor:pointer;
}
[disabled] {
  opacity:0.6;
  cursor:not-allowed;
}

.react-modal-overlay{
  background:rgba( 0,0,0, 0.5);
  
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  left:0;

  display:flex;
  align-items:center;
  justify-content:center;


}
.react-modal-content{
  width:100%;
  max-width:576px;
  background:var(--background);
  padding:3rem;
  position:relative;
  border-radius:0.25rem;
}

.react-modal-close{
  position:absolute;
  right:1.5rem;
  top:1.5rem;
  border:0;
  background:transparent;

  transition:filter 0.2s;

  &:hover{
    filter:brightness(0.8)
  }
  }
`;
