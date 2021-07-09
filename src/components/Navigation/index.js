import React from 'react'

import {NavLink, Link} from 'react-router-dom'

import {
    NavigationLinks,
    Labels
} from './styles';


import {ReactComponent as Bars} from '../../assets/bars.svg';

import {ReactComponent as Times} from '../../assets/times.svg';

import avatar from '../../assets/avatar.jpg'

function Navigation() {
    return (
        <React.Fragment>
            <Labels>
                <input type = "checkbox" id="check"/>
                    <label for ="check">
                        <Bars id ="btn"/>
                        <Times id ="cancel"/>
                    </label>
            </Labels> 
            <NavigationLinks>

                <div className = "avatar">
                    <Link exact to ="/">
                        <img src = {avatar} alt = ""/>
                    </Link>
                </div>
                    <ul className = "nav-item">

                        <li className = "nav-item">
                            <NavLink  to="/about" name="about" activeClassName="active-class">
                                About
                            </NavLink>              
                        </li>
                        <li className = "nav-item">        
                            <NavLink  to="/resume" name="resume" activeClassName="active-class">
                                Resume
                            </NavLink>
                        </li>
                        <li className = "nav-item">
                        <NavLink  to="/portfolio" name="portfolio" activeClassName="active-class">
                            Portfolios
                        </NavLink> 
                        </li>
                        <li className = "nav-item">
                            <NavLink  to="/blogs" name="blogs" activeClassName="active-class">
                                Blogs
                            </NavLink> 
                        </li>
                        <li className = "nav-item">
                            <NavLink  to="/contact" name="contact" activeClassName="active-class">
                                Contact
                            </NavLink> 
                        </li>
                    </ul>
    
                    <footer>
                        <p>@2021 Tumelo Moipolai</p>
                    </footer>
        </NavigationLinks>
        </React.Fragment>
    );
}

export default Navigation
