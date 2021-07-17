import React from 'react'

import {SideBarContainer,
        CloseIcon,
        Icon} from './styles';

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
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
