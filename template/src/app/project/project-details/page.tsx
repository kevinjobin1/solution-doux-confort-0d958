import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import ProjectDetails from '../../Components/ProjectDetails/ProjectDetails';

const page = () => {
    return (
        <div className='project-detail'>
            <BreadCumb Title="Project Details"></BreadCumb>
            <ProjectDetails></ProjectDetails>
        </div>
    );
};

export default page;