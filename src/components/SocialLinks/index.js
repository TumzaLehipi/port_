import React from 'react';

import { Link } from "react-router-dom";

import { Containter } from './styles';

import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";

import {  
    LinkBlank,
    List,
    ChildrenList
} from './styles';



function SocialLinks() {
    return (
        <Containter>
            {/*
            
            <List>
            <ChildrenList>
                <LinkBlank
                id="github"
                href="https://github.com/tumzalehipi"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Github />
                </LinkBlank>
            </ChildrenList>
            <ChildrenList>
                <LinkBlank
                id="linkedin"
                href="https://linkedin.com/in/WilliamJesusDev"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Linkedin />
                </LinkBlank>
            </ChildrenList>
            <ChildrenList>
                <LinkBlank
                id="facebook"
                href="https://www.facebook.com/WillZinhOZ"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Facebook />
                </LinkBlank>
            </ChildrenList>
            <ChildrenList>
                <LinkBlank
                id="instagram"
                href="https://instagram.com/willzinhoz"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Instagram />
                </LinkBlank>
            </ChildrenList>
            </List>
            */}
        </Containter>
    );
}

export default SocialLinks
