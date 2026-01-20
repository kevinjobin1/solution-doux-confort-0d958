import React from 'react';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';
import Faq from '../../../template/src/app/Components/Home/Faq';

const page = () => {
    return (
        <div className='faq-page'>
            <BreadCumb Title="FAQ"></BreadCumb>
            <Faq></Faq>
        </div>
    );
};

export default page;