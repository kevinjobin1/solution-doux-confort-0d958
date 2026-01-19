import React from 'react';
import Team1 from '../../../template/src/app/Components/Team/Team1';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';

const page = () => {
    return (
        <div className='team-page'>
            <BreadCumb Title="Notre équipe"></BreadCumb>
            <Team1></Team1>
        </div>
    );
};

export default page;