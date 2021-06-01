import React from 'react'

import {NavLink} from 'react-router-dom'

import {NavigationLinks,
       
} from './styles'

import avatar from '../../assets/avatar.jpg'

function Navigation() {
    return (
        <React.Fragment>
            <NavigationLinks>
            <div className = "avatar">
                <img src = {avatar} alt = ""/>
            </div>
                
                    <NavLink exact to="/" name="home" activeClassName="active">
                        Home
                    </NavLink> 
                    <NavLink  to="/about" name="about" activeClassName="active">
                        About
                    </NavLink>              
                    <NavLink  to="/resume" name="resume" activeClassName="active">
                        Resume
                    </NavLink>  
                    <NavLink  to="/portfolio" name="portfolio" activeClassName="active">
                        Portfolios
                    </NavLink> 
                    <NavLink  to="/blogs" name="blogs" activeClassName="active">
                        Blogs
                    </NavLink> 
                    <NavLink  to="/contact" name="contact" activeClassName="active">
                        Contact
                    </NavLink> 
             
                <footer>
                    <p>@2021 Tumelo Moipolai</p>
                </footer>
        </NavigationLinks>
        </React.Fragment>
    );
}

export default Navigation
