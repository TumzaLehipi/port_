import React from 'react';

import Particle from '../../components/particles/particle';

import SocialLinks from '../../components/SocialLinks';

import HomeText from '../../components/homeTextArea/index';

function Home() {
    return (
        <React.Fragment>
                <HomeText 
                 home = {true}
                 pre = {"8ta,~Ke TumzaLehipi,~SoftwareDeveloper!"}
                 title={"Hi,~I'm Tumelo Moipolai,~SoftwareDeveloper!"}
                 subtitle={"Back-End(.Net) / Front-End(ReactJS, Flutter) / Desktop(ElectronJS)"}
                 />
                 <SocialLinks/>
                <Particle/>   
        </React.Fragment>
    );
}

export default Home;
