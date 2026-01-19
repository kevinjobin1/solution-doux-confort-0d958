import React from 'react';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';
import Project1 from '../../../template/src/app/Components/Project/Project1';

const page = () => {
    return (
        <div className='project-page'>
            <BreadCumb Title="Nos réalisations"></BreadCumb>
            <Project1></Project1>
        </div>
    );
};

export default page;