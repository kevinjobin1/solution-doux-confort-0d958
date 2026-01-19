import React from 'react';
import BlogDetails from '../../Components/BlogDetails/BlogDetails';
import BreadCumb from '../../Components/Common/BreadCumb';

const page = () => {
    return (
        <div className='blog-detail'>
            <BreadCumb Title="Blog Details"></BreadCumb>
            <BlogDetails></BlogDetails>
        </div>
    );
};

export default page;