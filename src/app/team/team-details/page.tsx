import React from 'react';
import TeamDetails from '../../../../template/src/app/Components/TeamDetails/TeamDetails';
import BreadCumb from '../../../../template/src/app/Components/Common/BreadCumb';

const page = () => {
    return (
        <div className='team-detail-page'>
            <BreadCumb Title="Détails sur notre équipe"></BreadCumb>
            <TeamDetails></TeamDetails>
        </div>
    );
};

export default page;