import styled from "styled-components"

import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

import {ReactComponent as Bars} from '../../assets/bars.svg';




export const NavContainer = styled.nav`
    width : 10rem;
    position : fixed;
    height : 100vh;
    background-color : #202026;
    display : flex;
    justify-content : space-between;
    flex-direction: column;
    align-items : center;
    z-index : 999;

        img{
            width: 70%;
            border-radius : 50%;
            border : 8px solid #181a1e;
            &:hover{
                cursor: pointer;
                border : 3px solid #ff3d00;
               
            }
            &:before{
                content : "";
                width: 70%;
                border-radius : 50%;
                border : 8px solid #ff3d00;
                transform : all .9s cubic-bezier(.67,-0.25,.32,.96); 
            }
        }
    
 
   
    footer{
        border-top : 1px solid  #181a1e;
        width : 100%;
        p{
            padding: .5rem 0;
            font-size: 10px;
            display : block;
            text-align:center;
        }
    }
    @media screen and (max-width: 805px) {
      display : none;
      .nav-item{
          position : fixed;
          font-size : 17px;
      }
    }
`;
export const NavLink = styled(LinkS)`
    display : block;
    padding : 1rem 0;
    position : relative;
    &:hover{
    cursor: pointer;
    
    opacity : 0.50;
  }
  &:before{
    content : "";
    position : absolute;
    bottom : 0;
    left : 0;
    width : 0;
    height : 50%;
    border-bottom : 1px solid #ff3d00;
    transform : all .4s cubic-bezier(.67,-0.25,.32,.96); 
    z-index : 3;
    transform-origin : left;
  }
  :hover::before{
    width : 100%;
    height : 100%;
    }
    .active-class{
    background-color :  #ff3d00;
  }

`

export const NavItem = styled.li`

  display : block;
  border-bottom: 1px solid #181a1e;
  :hover::before{
      width : 100%;
      height : 100%;
  }

`;

export const NavMenu = styled.ul`
    position : relative;
    top : -34px;
    margin-top : 0;
    width : 100%;
    text-align : center;
    cursor : pointer;

`;

export const MobileIcon  =styled.div`
    width : 10rem;
    height : 80px;
 
    @media screen and (max-width :805px){
        position : fixed;
        z-index : 2;
        width :  100%;
        background-color : #202026;

    }
    @media screen and (min-width : 806px){
      display : none;
    }
`;

export const FaBars  = styled(Bars)`
       height: 20px;
      margin: 0 2px;
      line-height : 80px;
      float: left;
      color : white;
      font-size : 30px; 
      cursor: pointer;
      margin-left : 20px;
      display : none;

  @media screen and (max-width :805px){

      position : relative;
      top : 25px;
      line-height : 80px;
      display : block;
      float : right;
      margin-right : 8%;
    }
`;

export const Avatar  = styled.div`
    width : 100%;
    height : 200px;
    border-bottom : 1px solid #181a1e;
    text-align : center;
    padding : 1rem 0;

    &:hover::before{
    width : 100%;
    height : 100%;
`;






