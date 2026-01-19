import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import ServiceDetails from '../../Components/ServiceDetails/ServiceDetails';

const page = () => {
    return (
        <div className='service-deatils-page'>
            <BreadCumb Title="Service Details"></BreadCumb>
            <ServiceDetails></ServiceDetails>
        </div>
    );
};

export default page;