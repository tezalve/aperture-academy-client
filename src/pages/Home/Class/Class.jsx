import React from 'react';
import { Card } from 'react-bootstrap';

const Class = ({ cls }) => {
    return (
        <div className='col-md-4 p-5'>
            <Card>
                <Card.Img className='' width={"100%"} variant="top" src={cls.image} />
                <Card.Text className='text-center'>{cls.name}</Card.Text>
            </Card>
        </div>
    );
};

export default Class;