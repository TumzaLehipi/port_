import styled, { keyframes } from 'styled-components'

const toAnimate = keyframes`
0%{
  opacity: 0
}
100%{
  opacity: 1
}
`;

const rubberBand = keyframes`
0% {
  -webkit-transform: scale3d(1,1,1);
  -ms-transform: scale3d(1,1,1);
  transform: scale3d(1,1,1)
}

30% {
  -webkit-transform: scale3d(1.25,.75,1);
  -ms-transform: scale3d(1.25,.75,1);
  transform: scale3d(1.25,.75,1)
}

40% {
  -webkit-transform: scale3d(.75,1.25,1);
  -ms-transform: scale3d(.75,1.25,1);
  transform: scale3d(.75,1.25,1)
}

50% {
  -webkit-transform: scale3d(1.15,.85,1);
  -ms-transform: scale3d(1.15,.85,1);
  transform: scale3d(1.15,.85,1)
}

65% {
  -webkit-transform: scale3d(.95,1.05,1);
  -ms-transform: scale3d(.95,1.05,1);
  transform: scale3d(.95,1.05,1)
}

75% {
  -webkit-transform: scale3d(1.05,.95,1);
  -ms-transform: scale3d(1.05,.95,1);
  transform: scale3d(1.05,.95,1)
}

100% {
  -webkit-transform: scale3d(1,1,1);
  -ms-transform: scale3d(1,1,1);
  transform: scale3d(1,1,1)
}
`;


export const Container = styled.div`
    position: absolute;
    top : 10%
    left : 20%;
    user-select: none;
    color : #444;
    
    
    @media screen and (max-width : 480px) and (max-height : 823px) and (orientation : portrait){
      margin-top : 10%;
      width : 70%;
      margin-left : 15%;
    }

    @media screen and (min-width : 481px)  and (max-width : 824px) and (min-height : 854px) and (max-height : 1024px) and (orientation : portrait){
      margin-top : 20%;
      width : 70% ;
    }
   
/*  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    font-size: 5vw;
  }
     
  @media screen and (max-width: 420px) and (orientation: portrait) {
      margin-top : 200px;
  }

  @media screen and (min-height: 320px) and (max-height: 819px) and (orientation: portrait) {
    font-size: 3vh;
    left: 90px;


  }
  @media screen and (min-width : 600px) and (max-width : 800px) and (orientation : portrait){
      position : relative;
      top :30%;
      margin-left : 20%;
      width: 80%;

    } */
`;

export const Title = styled.h1`

  letter-spacing: 0.1em;
  font-size: 7vh;
  font-family: 'Nunito', sans-serif;
  font-weight: 400 !important;
  color: white;


`;

export const Sub = styled.h2`
  margin-top: 34px;
  color: #ff3d00;
  font-size: 10px;
  letter-spacing: 0.25em;
  opacity: 1;
  @media screen and (max-width : 480px) and (max-height : 823px) and (orientation : portrait){
      font-size: 7px;
    
    }
    @media screen and (min-width : 481px)  and (max-width : 823px) and (min-height : 854px) and (max-height : 1024px) and (orientation : portrait){
      font-size: 8px;

    }

  `;
  export const Subtitle = styled.h2`
    margin-left : -5rem;
    margin-top: 34px;
    color: #ff3d00;
    font-size: 10px;
    letter-spacing: 0.25em;
    opacity: 1;
    @media screen and (max-width : 480px) and (max-height : 823px) and (orientation : portrait){
      font-size: 7px;

    }
    @media screen and (min-width : 481px)  and (max-width : 823px) and (min-height : 854px) and (max-height : 1024px) and (orientation : portrait){
      font-size: 8px;

    }


  `;
  export const Paragraph = styled.div`  

    display : flex;
    justify-content : center;
    align-content : center;
   
 
  `;
  export const Heading = styled.h1`

  color : gray;
  `;
  export const About = styled.div`
  margin-top: 100px;
 
  `;
  export const TextContainer = styled.div`
  display : flex;
  justify-content : center;
  flex-direction : column;
  max-width : 900px;
  background-color : #252627;
  padding : 40px;
  color : #fff;
  box-shadow : 0 0 1.2rem rgba(0, 0, 0 ,.25);

  `;

export const Span = styled.span`
    letter-spacing: 0.05em;
    line-height: 7vh;
    font-size: 7.2vh;
    font-family: 'Nunito', sans-serif;
    color : white;
    display: inline-block;
    transition: all 0.3s linear;

    &:hover {
      animation: ${rubberBand} 1s ease backwards;
      color: red;
    }

    > span {
      margin-left: 0.1em;
      color: purple;
    }
    @media screen and (max-width : 480px) and (max-height : 823px) and (orientation : portrait){
      font-size: 5vw;
      z-index : 2;
    }
    @media screen and (min-width : 481px)  and (max-width : 823px) and (min-height : 854px) and (max-height : 1024px) and (orientation : portrait){
      font-size: 5.5vw;
      z-index : 2;
    }

`;
export const Button = styled.button`
  background: #18181d;
  color: #ff3d00;
  opacity: 0;
  width : 10rem;
  margin-top: 30px;
  cursor: pointer;
  font-size: 0.6em;
  letter-spacing: 0.1em;
  padding: 0.5em 1em;
  border: 2px solid #ff3d00;
  border-radius: 3px;

  &.active {
    animation: ${toAnimate} 2s backwards;
    opacity: 1;
  }
`;

export const OtherTitles = styled.div`

  position : relative;
  margin-top : 30px;
  margin-left : -5rem;
  letter-spacing: 0.1em;
  font-size: 7vh;
  font-family: 'Nunito', sans-serif;
  font-weight: 400 !important;
  color: white;



  @media screen and (max-width : 420px){
    font-size: 3vh;

    }
    @media screen and (min-width : 600px) and (max-width : 800px) and (orientation : portrait){
      font-size: 3vh;
    }
`;