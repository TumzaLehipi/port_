import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import { Link, animateScroll as scroll } from "react-scroll";

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Portfolio from "./pages/Portfolio";

function Routes() {
    return (
       <>
           <Link path = '/' 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        exact render = {()=>
                        <Home 
                    />
                }/> 
                
                <Link path = '/About' 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        exact render = {()=>
                        <About 
                    />
                }/> 
        
                <Link path = '/Contact' 
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                        exact render = {()=>
                        <Contact 
                      //title = {this.state.contact.title}
                    />
                }/> 
                    <Link path = '/Resume' 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        exact render = {()=>
                        <Resume 
                      //  title = {this.state.contact.title}
                    />
                }/> 
                    <Link path = '/Blogs' 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        exact render = {()=>
                        <Blogs
                    />
                }/>
                    <Link path = '/Portfolio' 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        exact render = {()=>
                        <Portfolio
                    />
                }/>
                <Link path="*">
                    <Redirect to="/" />
                </Link>
       </>

    );
}


export default Routes;
