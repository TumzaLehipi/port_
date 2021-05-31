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

export const Nav = styled.nav`

    display : flex;
    justify-content : space-between;
    flex-direction: column;
    align-items : center;
    height : 100%;
    width : 100%;

    .avatar{
        width : 100%;
        border-bottom : 1px solid #181a1e;
        text-align : center;
        padding : 1rem 0;
        img{
            width: 70%;
            border-radius : 50%;
            border : 8px solid #181a1e;
        }
    }
    .nav-items{
        width : 100%;
        text-align : center;
        li{
            display : block;
            a{
                display : block;
            }
        }
    }

    footer{
        border-top : 1px solid  #181a1e;
        width : 100%;
        p{
            padding: 1rem 0;
            font-size: 0.5 rem;
            display : block;
            text-align:center;
        }
    }

`;

