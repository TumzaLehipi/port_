import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Portfolio from "./pages/Portfolio";

function Routes() {
    return (
       <Switch>
           <Route path = '/' 
                        exact render = {()=>
                        <Home 
                    />
                }/> 
                
                <Route path = '/About' 
                        exact render = {()=>
                        <About 
                    />
                }/> 
        
                <Route path = '/Contact' 
                        exact render = {()=>
                        <Contact 
                      //title = {this.state.contact.title}
                    />
                }/> 
                    <Route path = '/Resume' 
                        exact render = {()=>
                        <Resume 
                      //  title = {this.state.contact.title}
                    />
                }/> 
                    <Route path = '/Blogs' 
                        exact render = {()=>
                        <Blogs
                    />
                }/>
                    <Route path = '/Portfolio' 
                        exact render = {()=>
                        <Portfolio
                    />
                }/>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
       </Switch>

    );
}


export default Routes;
