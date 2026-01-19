import React from 'react';
import BreadCumb from '../../../../template/src/app/Components/Common/BreadCumb';
import ProjectDetails from '../../../../template/src/app/Components/ProjectDetails/ProjectDetails';

const page = () => {
    return (
        <div className='project-detail'>
            <BreadCumb Title="Détails du projet"></BreadCumb>
            <ProjectDetails></ProjectDetails>
        </div>
    );
};

export default page;