import styled from "styled-components";

export const Container = styled.div`
  width : 16.3rem;
  position : fixed;
  height : 100vh;
  background-color : #202026;
  //border-right : 1px solid #5773ff; 

  @media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
    min-height: 100vw;
  }
`;



