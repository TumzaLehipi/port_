import React from 'react';

import DefaultText from '../../components/defaultTextArea/index';

import {
    MainLayout
  } from '../../styles/Layout';

function Resume(props) {
    return (
        <MainLayout>
            <DefaultText 
            title={"Resume"}
            subtitle={"Under Construction..."}
            />
        </MainLayout>
    );
}

export default Resume;
