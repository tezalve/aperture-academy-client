import React from 'react';
import Slider from './Slider/Slider';
import Class from './Class/Class';
import { useQuery } from '@tanstack/react-query'
import { CardGroup } from 'react-bootstrap';

const Home = () => {
    const { data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch("http://localhost:5000/classes")
            return response.json();
        },
    })
    console.log(data);
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
        </div>
    );
};

export default Home;