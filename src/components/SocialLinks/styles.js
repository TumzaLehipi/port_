import styled from 'styled-components';


export const Containter = styled.div`
    position: absolute;
    margin-left : 60rem;
    top: 12rem;
    user-select: none;
    height : 15rem;
    width: 3rem;
   
`;
export const List = styled.ul`
 
  display: inline-block;
  padding: 0;
  list-style: none;
  align-items : center;


  @media only screen and (max-height: 619px) {
    display: none;
  }
`;

export const LinkBlank = styled.a``;

export const ChildrenList = styled.li`
  > a {
    padding: 5px 0;
    display: block;
    width: 30%;
    margin: auto;
  
    color: ${props => props.theme.accent};

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
