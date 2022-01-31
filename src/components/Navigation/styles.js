import styled from "styled-components"


export const NavigationLinks = styled.nav`

    width : 10rem;
    position : fixed;
    height : 100vh;
    background-color : #202026;
    display : flex;
    justify-content : space-between;
    flex-direction: column;
    align-items : center;
    z-index : 999;
    .avatar{
        width : 100%;
        height : 200px;
        border-bottom : 1px solid #181a1e;
        text-align : center;
        padding : 1rem 0;
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
        .avatar:hover::before{
                width : 100%;
                height : 100%;

            }
    }
    .nav-item{
        position : relative;
        top : -34px;
          margin-top : 0;
        width : 100%;
        text-align : center;
        cursor : pointer;
    
        li{
            display : block;
            border-bottom: 1px solid #181a1e;
         
            a{
                display : block;
                padding : 1rem 0;
                position : relative;
              
                &:hover{
                  cursor: pointer;
                  
                }
                &:before{
                  color : white;
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
            }
            a:hover::before{
                width : 100%;
                height : 100%;

            }
        }
        .active-class{
            background-color :  #ff3d00;
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

export const Labels  =styled.div`

    width : 10rem;
    height : 80px;


    label #btn, label #cancel{
      height: 20px;
      margin: 0 2px;
      line-height : 80px;
      float: left;
      color : white;
      font-size : 30px; 
      cursor: pointer;
      margin-left : 20px;
      display : none;
    }

    #check{
      display : none;
    }
    @media screen and (max-width :805px){
        position : fixed;
        z-index : 2;
        width :  100%;
        background-color : #202026;


        label #btn{
          position : relative;
          top : 25px;
          line-height : 80px;
          display : block;
          float : right;
          margin-right : 8%;
        }

    }
    @media screen and (min-width : 806px){
      display : none;
    }
`;

export const List = styled.ul`
 
  display: inline-block;
  padding: 0;
  list-style: none;
  align-items : center;
  width : 10rem;


  @media only screen and (max-height: 619px) {
    display: none;
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