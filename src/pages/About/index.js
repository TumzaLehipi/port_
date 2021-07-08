import React from 'react';

import Text from '../../components/textArea';

import {
    MainLayout,
    AboutStyled
} from '../../styles/Layout';

function About() {
    return (
            <MainLayout>
                <AboutStyled>
                    <Text  title={"About Me"} subtitle  = {"Under Construction..."}>                   
           
                    </Text>
                   </AboutStyled>
            </MainLayout>
    );
}

export default About;   
