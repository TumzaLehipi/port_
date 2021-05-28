import React from 'react'

import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as About } from "../../assets/about.svg";
import { ReactComponent as Skills } from "../../assets/skills.svg";
import { ReactComponent as Works } from "../../assets/works.svg";
import { ReactComponent as Contact } from "../../assets/contact.svg";

import { NavigationStyle } from './styles'
import {NavLink} from 'react-router-dom'
import avatar from '../../assets/avatar.jpg'

function Navigation() {
    return (
        <NavigationStyle>
            <div className = "avatar">
                <img src = {avatar} alt = ""/>
            </div>
            <ul className = "nav-items">
                <li className = "nav-item">
                    <NavLink exact to="/" name="home" activeClassName="active">
                        Home
                    </NavLink> 
                </li>
                <li className = "nav-item">
                    <NavLink  to="/about" name="about" activeClassName="active">
                        About
                    </NavLink> 
                </li>
                <li className = "nav-item">
                    <NavLink  to="/resume" name="resume" activeClassName="active">
                        Resume
                    </NavLink> 
                </li>
                <li className = "nav-item">
                    <NavLink  to="/portfolio" name="portfolio" activeClassName="active">
                        Portfolios
                    </NavLink> 
                </li>
                <li className = "nav-item">
                    <NavLink  to="/blogs" name="blogs" activeClassName="active">
                        Blogs
                    </NavLink> 
                </li>
                <li className = "nav-item">
                    <NavLink  to="/contact" name="contact" activeClassName="active">
                        Contact
                    </NavLink> 
                </li>
            </ul>
            <footer>
                <p>@2021 Tumelo Moipolai</p>
            </footer>
        </NavigationStyle>
    )
}

export default Navigation
