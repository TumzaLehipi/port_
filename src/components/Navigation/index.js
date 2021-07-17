
import React from 'react'

import  {Link} from 'react-router-dom'

import avatar from '../../assets/avatar.jpg'

import {
    NavContainer,
    MobileIcon,
    FaBars,
  
    Avatar,
    NavMenu,
    NavItem,
    NavLink
} from './styles';

function Navigation() {
    return (
        <React.Fragment>
            <MobileIcon>
                <FaBars/>
            </MobileIcon> 

            <NavContainer>
            <Avatar>
                <Link exact to ="/">
                    <img src = {avatar} alt = ""/>
                </Link>
            </Avatar>
                <NavMenu className = "nav-item">

                    <NavItem className = "nav-item">
                        <NavLink  to="about" name="about" activeClassName="active-class">
                            About
                        </NavLink>              
                    </NavItem>
                    <NavItem className = "nav-item">        
                        <NavLink  to="resume" name="resume" activeClassName="active-class">
                            Resume
                        </NavLink>
                    </NavItem>
                    <NavItem className = "nav-item">
                    <NavLink  to="portfolio" name="portfolio" activeClassName="active-class">
                        Portfolios
                    </NavLink> 
                    </NavItem>
                    <NavItem className = "nav-item">
                        <NavLink  to="blogs" name="blogs" activeClassName="active-class">
                            Blogs
                        </NavLink> 
                    </NavItem>
                    <NavItem className = "nav-item">
                        <NavLink  to="contact" name="contact" activeClassName="active-class">
                            Contact
                        </NavLink> 
                    </NavItem>
                </NavMenu>
 
                <footer>
                    <p>@2021 Tumelo Moipolai</p>
                </footer>
        </NavContainer>
        </React.Fragment>
    );
}

export default Navigation
