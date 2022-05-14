import React from 'react';
import 
  styled
  from 'styled-components';

import Particle from '../../components/particles/particle';

import SocialLinks from '../../components/SocialLinks';

import HomeText from '../../components/homeTextArea/index';

function Home() {
    return (
        <React.Fragment>
                <HomeText 
                        home = {true}
                        pre = {"8ta,~Ke TumzaLehipi,~WebDeveloper!"}
                        title={"Hi,~I'm Tumelo Moipolai,~WebDeveloper!"}
                        subtitle={"Back-End(NodeJS) / Front-End(ReactJS) / Desktop(ElectronJS)"}
                 />
                 <SocialLinks/>
                <Container>
                    <Particle/>   
                </Container>
        </React.Fragment>
    );
}


const Container = styled.div`
top : 2px;
height: 95%;
`;

export default Home;
