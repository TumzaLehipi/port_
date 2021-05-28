import React from 'react';
import Navigation from '../navigation';

import {
    Container, 
   // List,   
   // LinkBlank,
   // ChildrenList
} from './styles';


function SideBar() {
    return (
        <React.Fragment>
            <Container>
                <Navigation/>
            </Container>
        </React.Fragment>
    
    )
}

export default SideBar
