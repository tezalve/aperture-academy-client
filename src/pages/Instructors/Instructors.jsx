import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Instructor2 from './Instructor2/Instructor2';
import { Slide } from 'react-awesome-reveal';

const Instructors = () => {

    const [ins, setIns] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setIns(data))
    }, [])

    return (
        <div>
            <div className='mt-5 bg-image p-5' style={{ backgroundImage: `url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).webp")`, backgroundAttachment: "fixed" }}>
                <h1 className='text-center'>Our Instructors</h1>
                <Slide>
                    <CardGroup>
                        {
                            ins?.map(ins => <Instructor2
                                key={ins._id}
                                ins={ins}
                            ></Instructor2>)
                        }
                    </CardGroup>
                </Slide>
            </div>
        </div>
    );
};

export default Instructors;