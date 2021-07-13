import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style :  none;
  text-decoration : none;
  font-family: 'Nunito', sans-serif;
  font-size : 1.2rem;
}

html,
body,
#app {
  min-height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
}

html {
  font-size: 1em;
  line-height: 1.4em;
}
}

body {
  background : #18181d;
  color : #b2b6b9;

}
a{
  font-family : inherit;
  color:inherit;
  font-size : inherit;
}


@media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
  html {
  max-width: 100vh;
  min-height: 100vw;
  max-height: 100vw;
  }

}
`;


export const Page = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;

   @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    min-height: 100vw;
    min-width: 100vh;
  }
`;

export const Container = styled.div`
  position: absolute;
  will-change: contents;
  height: 94vh;
  width: 100%;
  margin: 0 auto;
  top: 0px;
  bottom: 5vh;

  
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    min-height: 94vw;
    min-width: 100vh;
    top: 5vw;
    bottom: 5vw;
  }

`;

export const MainContentStyled = styled.main`
  
  position : relative;
  margin-left : 10rem;
  min-height : 100vh;

  @media screen and  (max-width : 600px) and (orientation : portrait) {
      margin: 0;
  }
  @media screen and (min-width : 601px) and (max-width : 800px) and (orientation : portrait){
    margin : 0;
    
  }
  
  /*  .lines{
    position : absolute;
    min-height : 100vh;
    width : 100%;
    .
  }*/

`;