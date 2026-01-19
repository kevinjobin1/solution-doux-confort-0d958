import React from 'react';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';
import Services2 from '../../../template/src/app/Components/Home2/Services2';
import Cta from '../../../template/src/app/Components/Services/Cta';
import Pricing from '../../../template/src/app/Components/Home/Pricing';


const page = () => {
    return (
        <div className='service-page'>
            <BreadCumb Title="Nos services"></BreadCumb>
            <Services2></Services2>
            <Cta></Cta>
            <Pricing></Pricing>
        </div>
    );
};

export default page;