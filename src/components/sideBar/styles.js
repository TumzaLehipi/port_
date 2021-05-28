import styled from "styled-components";

export const Container = styled.div`
  width : 16.3rem;
  position : fixed;
  height : 100vh;
  background-color : #202126;
  border-right : 1px solid #e03e10; 

  @media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
    min-height: 100vw;
  }
`;



