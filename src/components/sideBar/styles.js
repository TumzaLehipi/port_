import styled from 'styled-components'; 

import {Link as LinkS} from 'react-scroll';

import {ReactComponent as Times} from '../../assets/times.svg';

export const SideBarContainer = styled.aside`
  position : fixed;
  z-index : 999;
  width : 100%;
  height : 100%;
  background :  #202026;
  display : grid;
  align-items : center;
  top : 0;
  left : 0;
  transition : 0.3s ease-in-out;
  opacity : ${({isOpen}) => (isOpen ? '100%': '0')};
  top : ${({isOpen }) =>(isOpen ? '0' : '-100')};
  


`;

export const CloseIcon = styled(Times)`
      height: 20px;
      margin: 0 2px;
      color : white;
      font-size : 30px; 
      cursor: pointer;
`;

export const Icon = styled.div`

    position : absolute;
    top : 25px;
    float : right;
    margin-left : 92%;

`;
export const SideBarWrapper = styled.div`

  color : #fff;

`;

export const SideBarMenu = styled.ul`
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : repeat(6,80px);
    text-align : center;

    @media screen and (max-width : 480px){
      grid-template-rows : repeat(6, 60px);
    }

`;

export const SideBarLink = styled(LinkS)`

  display :flex;
  align-items : center;
  justify-content : center;
  font-size : 1.5rem;
  text-decoration : none;
  list-style : none;  
  transition : 0.2s ease-in-out;
  text-decoration : none;
  color : #fff;

  &::hover{

    color : #ff3d00;

  }
`;


