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
    margin-left : 8rem;
    top: 10rem;
    user-select: none;
    height : 330px;
    width: 575px;
    color : #444;
 

    
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    font-size: 5vw;
  }

  @media screen and (min-height: 320px) and (max-height: 819px) and (orientation: portrait) {
    font-size: 3vh;
    left: 90px;
  }

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

  `;
  export const Paragraph = styled.div`  

    display : flex;
    justify-content : center;
    align-content : center;
    background-color : white;
 
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

`;