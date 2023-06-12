import React, { useEffect, useState } from 'react';
import Slider from './Slider/Slider';
import Class from './Class/Class';
import { useQuery } from '@tanstack/react-query'
import { CardGroup } from 'react-bootstrap';
import Instructor from './Instructor/Instructor';
import Choose from './Choose/Choose';
import { Slide } from "react-awesome-reveal";

const Home = () => {
    const [appclasses, setAppclasses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/appclasses`)
            .then(res => res.json())
            .then(data => setAppclasses(data))
    }, [])

    const [ins, setIns] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setIns(data))
    }, [])

    return (
        <div>
            <Slider></Slider>
            <div className='mt-5 bg-image p-5' style={{ backgroundImage: `url("https://imaginem.io/blacksilver/wp-content/uploads/sites/2/2019/03/events-background-4.jpg")`, backgroundAttachment: "fixed" }}>
                <h1 className='text-center'>Favourate Classes</h1>
                <Slide>
                    <CardGroup>
                        {
                            appclasses?.slice(0, 6).map(cls => <Class
                                key={cls._id}
                                cls={cls}
                            ></Class>)
                        }
                    </CardGroup>
                </Slide>
            </div>
            <div className='mt-5 bg-image p-5' style={{ backgroundImage: `url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).webp")`, backgroundAttachment: "fixed" }}>
                <h1 className='text-center'>Favourate Instructors</h1>
                <Slide>
                    <CardGroup>
                        {
                            ins?.slice(0, 6).map(ins => <Instructor
                                key={ins._id}
                                ins={ins}
                            ></Instructor>)
                        }
                    </CardGroup>
                </Slide>
            </div>
            <Choose></Choose>
        </div>
    );
};

export default Home;