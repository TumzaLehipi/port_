import React from 'react'

import { Link} from 'react-router-dom';

import {FaBars} from 'react-icons/fa';

import {
    Nav,
    MobileIcon,
    Avatar,
    Img,
    NavMenu,
    NavItem, 
    NavLink,
    Footer,


} from './styles';


import avatar from '../../assets/avatar.jpg'

function Navigation() {
    return (
        <React.Fragment>
            <Nav>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon> 
                <Avatar>
                    <Link exact to ="/">
                        <Img src = {avatar} alt = ""/>
                    </Link>
                </Avatar>
                <NavMenu >
                    <NavItem className = "nav-item">
                        <NavLink  to="/about" name="about" activeClassName="active-class">
                            About
                        </NavLink>              
                    </NavItem>
                    <NavItem className = "nav-item">        
                        <NavLink  to="/resume" name="resume" activeClassName="active-class">
                            Resume
                        </NavLink>
                    </NavItem>
                    <NavItem className = "nav-item">
                    <NavLink  to="/portfolio" name="portfolio" activeClassName="active-class">
                        Portfolios
                    </NavLink> 
                    </NavItem>
                    <NavItem className = "nav-item">
                        <NavLink  to="/blogs" name="blogs" activeClassName="active-class">
                            Blogs
                        </NavLink> 
                    </NavItem>
                    <NavItem className = "nav-item">
                        <NavLink  to="/contact" name="contact" activeClassName="active-class">
                            Contact
                        </NavLink> 
                    </NavItem>
                </NavMenu>
 
                <Footer>
                    <p>@2021 Tumelo Moipolai</p>
                </Footer>
        </Nav>
        </React.Fragment>
    );
}

export default Navigation
