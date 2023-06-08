import React, { useEffect, useState } from 'react';
import Slider from './Slider/Slider';
import Class from './Class/Class';
import { useQuery } from '@tanstack/react-query'
import { CardGroup } from 'react-bootstrap';
import Instructor from './Instructor/Instructor';

const Home = () => {
    const { data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch("http://localhost:5000/classes")
            return response.json();
        },
    })

    const [ins, setIns] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setIns(data))
    }, [])
    
    return (
        <div>
            <Slider></Slider>
            <div className='mt-5 bg-image' style={{ backgroundImage: `url("https://imaginem.io/blacksilver/wp-content/uploads/sites/2/2019/03/events-background-4.jpg")`}}>
                <h3 className='text-center'>Favourate Classes</h3>
                <CardGroup>
                    {
                        data?.slice(0, 6).map(cls => <Class
                            key={cls._id}
                            cls={cls}
                        ></Class>)
                    }
                </CardGroup>
            </div>

            <div className='mt-5 bg-image' style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/05/23/07/10/360_F_523071045_X1O9AKUHikkPSlkWd9BQ7qMLUHXAnqW1.jpg")`}}>
                <h3 className='text-center'>Favourate Instructors</h3>
                <CardGroup>
                    {
                        ins?.slice(0, 6).map(ins => <Instructor
                            key={ins._id}
                            ins={ins}
                        ></Instructor>)
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default Home;