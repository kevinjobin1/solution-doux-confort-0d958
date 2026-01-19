import React from 'react';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';
import Contact from '../../../template/src/app/Components/Contact/Contact';

const page = () => {
    return (
        <div className='contact-page'>
            <BreadCumb Title="Contactez-nous"></BreadCumb>
            <Contact></Contact>
        </div>
    );
};

export default page;