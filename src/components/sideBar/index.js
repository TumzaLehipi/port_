import React from 'react';

import {NavLink} from 'react-router-dom'

import avatar from '../../assets/avatar.jpg'

import Navigation from '../Navigation/index'

import { ReactComponent as Home, } from "../../assets/home.svg"
import { ReactComponent as About } from "../../assets/about.svg"
import { ReactComponent as Skills } from "../../assets/skills.svg"
import { ReactComponent as Works } from "../../assets/works.svg"
import { ReactComponent as Contact } from "../../assets/contact.svg"

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
