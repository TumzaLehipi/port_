import React from 'react';

import Particle from '../../components/particles/particle';

import SocialLinks from '../../components/SocialLinks';

import Text from '../../components/textArea/index';

function Home() {
    return (
        <React.Fragment>
                <Text 
                 home = {true}
                 pre = {"8ta,Ke TumzaLehipi, Ke WebDeveloper!"}
                 title={"Hi, I'm TumzaLehipi, I'm WebDeveloper!"}
                 subtitle={"Back-End(NodeJS) / Front-End(ReactJS) / Desktop(ElectronJS)"}
                 />
                 <SocialLinks/>
                <Particle/>   
        </React.Fragment>

    );

}

export default Home;
