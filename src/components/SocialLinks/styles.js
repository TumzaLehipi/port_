import styled from 'styled-components';


export const Containter = styled.div`
    position: absolute;
    margin-left : 65rem;
    top: 12rem;
    user-select: none;
    height : 15rem;
    width: 3rem;
    
   
`;
export const List = styled.ul`
 
  display: block;
  padding: 0;
  list-style: none;
  align-items : center;
  margin-top : 3rem;


  @media only screen and (max-height: 619px) {
    display: none;
  }
`;

export const LinkBlank = styled.a``;

export const ChildrenList = styled.li`
  > a {
    padding: 7px 0;
    display: block;
    width: 60%;
    margin: auto;
    font-size : 2rem;
  
    color: #fff;

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

export const Lines = styled.div`

  position : absolute;
  width : 1px;
  min-height : 5rem;
  background-color : white;
  margin-left :1.5rem;
 

`;
export const Line2 = styled.div`
  
  position : absolute;
  width : 1px;
  min-height : 5rem;
  background-color : white;
  margin-left :1.5rem;
  margin-top : -2rem;
 

`;