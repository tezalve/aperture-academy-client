import React from 'react';
import { Card } from 'react-bootstrap';

const Instructor = ({ ins }) => {
    return (
        <div className='col-md-2 p-5'>
            <Card>
                <Card.Img className='' width={"100%"} variant="top" src={ins.image} />
            </Card>
        </div>
    );
};

export default Instructor;