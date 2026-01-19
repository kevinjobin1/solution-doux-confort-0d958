import React from 'react';
import BreadCumb from '../../../../template/src/app/Components/Common/BreadCumb';
import ServiceDetails from '../../../../template/src/app/Components/ServiceDetails/ServiceDetails';

const page = () => {
    return (
        <div className='service-deatils-page'>
            <BreadCumb Title="Service détaillés"></BreadCumb>
            <ServiceDetails></ServiceDetails>
        </div>
    );
};

export default page;