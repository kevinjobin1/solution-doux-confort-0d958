import React from 'react';
import Blog1 from '../../../template/src/app/Components/Blog/Blog1';
import BreadCumb from '../../../template/src/app/Components/Common/BreadCumb';

const page = () => {
    return (
        <div className='blog-page'>
            <BreadCumb Title="Blog"></BreadCumb>
            <Blog1></Blog1>
        </div>
    );
};

export default page;