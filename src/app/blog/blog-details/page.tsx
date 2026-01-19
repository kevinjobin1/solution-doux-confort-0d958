import React from 'react';
import BlogDetails from '../../../../template/src/app/Components/BlogDetails/BlogDetails';
import BreadCumb from '../../../../template/src/app/Components/Common/BreadCumb';

const page = () => {
    return (
        <div className='blog-detail'>
            <BreadCumb Title="Détails du blog"></BreadCumb>
            <BlogDetails></BlogDetails>
        </div>
    );
};

export default page;