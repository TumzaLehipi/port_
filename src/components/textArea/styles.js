import styled from 'styled-components'


export const Container = styled.div`
    position: absolute;
    top: 10%;
    left: 500px;
    user-select: none;
    height : 330px;
    width: 450px;
    color : #444;
`;

export const Title = styled.h1`
  letter-spacing: 0.1em;
  font-size: 4vh;
  font-family: "Coolvetica";
  font-weight: 400 !important;
  color: #ffffff;

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
  color : gray;
  box-shadow : 0 0 1.2rem rgba(0, 0, 0 ,.25);

  `;