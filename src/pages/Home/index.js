import React from 'react';

import Particle from '../../components/particles/particle';

import SocialLinks from '../../components/SocialLinks';

import Text from '../../components/textArea/index';

function Home() {
    return (
        <React.Fragment>
                <Text 
                 home = {true}
                 pre = {"8ta,~Ke TumzaLehipi,~WebDeveloper!"}
                 title={"Hi,~I'm Tumelo Moipolai,~WebDeveloper!"}
                 subtitle={"Back-End(NodeJS) / Front-End(ReactJS) / Desktop(ElectronJS)"}
                 />
                 <SocialLinks/>
                <Particle/>   
        </React.Fragment>
    );
}

export default Home;