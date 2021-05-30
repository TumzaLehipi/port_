import styled from "styled-components";

export const NavigationStyle = styled.nav`

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