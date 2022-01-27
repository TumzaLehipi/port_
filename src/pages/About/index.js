import React from 'react';

import DefaultText from '../../components/defaultTextArea/index';

import {
    MainLayout,
    AboutStyled
} from '../../styles/Layout';

function About() {
    return (
            <MainLayout>
                <AboutStyled>
                    <DefaultText  title={"About Me"} subtitle  = {"Under Construction..."}>                   

                    </DefaultText>
                   </AboutStyled>
            </MainLayout>
    );
}

export default About;   
