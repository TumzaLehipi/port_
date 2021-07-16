import styled from "styled-components";

import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`

    width : 10rem;
    position : fixed;
    height : 100vh;
    background-color : #202026;
    display : flex;
    justify-content : space-between;
    flex-direction: column;
    align-items : center;
    z-index : 999;
    {/*


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
    */}

    @media screen and (max-width: 805px) {
        position : fixed;
        z-index : 2;
        width :  100%;
        background-color : #202026;
        height : 80px;
        .avatar{
          display : none;
        }
        .nav-item{
          display : none;
        }

        footer{
          display : none;
        }
    }
`;

export const Footer = styled.footer`
    
        border-top : 1px solid  #181a1e;
        width : 100%;
        p{
            padding: .5rem 0;
            font-size: 10px;
            display : block;
            text-align:center;
        }`;


export const MobileIcon  = styled.div`
    
    display : none;


    @media screen and (max-width : 768px){
      display : block;
      position : absolute;
      top : 0;
      right : 0;
      width : 100%;
      height : 80px;
      transform : translate(-100%, 60%);
      font-size : 1.8rem;
      cursor : pointer;
      color : white;
      background-color : red;
    }



`;



export const Avatar = styled.div`

  width : 100%;
  height : 200px;
  border-bottom : 1px solid #181a1e;
  text-align : center;
  padding : 1rem 0;

  &:hover::before{
    width : 100%;
    height : 100%;

  }
  
  @media screen and (max-width: 805px) {
          display : none;
  }
`;

export const Img = styled.img`

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

`;

export const  NavMenu = styled.ul`

    position : relative;
    top : -34px;
    margin-top : 0;
    width : 100%;
    text-align : center;
    cursor : pointer;
  
  @media only screen and (max-height: 768px) {
   // display: none;
  }
`;

export const NavItem = styled.li`
    display : block;
    border-bottom: 1px solid #181a1e;


    
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
    &:hover::before{
      width : 100%;
      height : 100%;
    }

`;


export const LinkBlank = styled.a``;

export const ChildrenList = styled.li`
  > a {
    padding: 5px 0;
    display: inline-block;
    width: 30%;
    margin: auto;
  
    color:white;

    &#github:hover {
      color: #283e4a;
    }
    &#facebook:hover {
      color: #4267b2;
    }
    &#linkedin:hover {
      color: #285aeb;
    }
    &#instagram:hover {
      color: #bc1888;
    }
  }
`;