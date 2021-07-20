import React from 'react'

import {SideBarContainer,
        CloseIcon,
        Icon,
        SideBarWrapper,
        SideBarMenu, 
        SideBarLink
    } from './styles';

function SideBar() {
    return (
        <SideBarContainer>
            <Icon>  
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to ='about'>
                        About
                    </SideBarLink>
                    <SideBarLink to ='resume'>
                        Resume
                    </SideBarLink>
                    <SideBarLink to ='portfolio'>
                        portfolio
                    </SideBarLink>
                     <SideBarLink to ='blogs'>
                        Blogs
                    </SideBarLink>
                    <SideBarLink to ='contact'>
                        Contact
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
