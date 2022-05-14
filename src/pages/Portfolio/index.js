import React from 'react'
import Card from '../../components/Card';

import DefaultText from '../../components/defaultTextArea/index';

import {
    MainLayout
} from '../../styles/Layout';

function Portfolio() {
    return (
        <MainLayout>
            <DefaultText 
                title={"Portfolio"}
                subtitle={"Under Construction..."}
            />
            <Card/>
        </MainLayout>
    )
}

export default Portfolio
