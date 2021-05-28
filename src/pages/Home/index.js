import React from 'react';


import Text from '../../components/textArea/index';




function Home() {
    return (
        <React.Fragment>
            
                <Text 
                 home = {true}
                 pre = {"Heita, Ke TumzaLehipi, Ke WebDeveloper!"}
                 title={"Hi, I'm TumzaLehipi, I'm WebDeveloper!"}
                 subtitle={"Back-End(NodeJS) / Front-End(ReactJS) / Desktop(ElectronJS)"}
                 />
        </React.Fragment>
    )
}

export default Home;
