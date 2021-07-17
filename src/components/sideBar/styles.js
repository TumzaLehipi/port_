import styled from 'styled-components'; 

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

