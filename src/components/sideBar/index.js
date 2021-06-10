import React from 'react';

import Navigation from '../Navigation/index'

import {
    Container, 
   // ChildrenList
} from './styles';


function SideBar() {
    return (
        <React.Fragment>
                <Container>
                    <Navigation/>
                </Container>
        </React.Fragment>
    );
}

export default SideBar
