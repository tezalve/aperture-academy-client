import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateClass = () => {

    const cls = useLoaderData();

    return (
        <div>
            {cls.class_name}
        </div>
    );
};

export default UpdateClass;