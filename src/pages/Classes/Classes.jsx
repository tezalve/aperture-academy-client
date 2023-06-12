import React, { useEffect, useState } from 'react';
import Class2 from './Class2/Class2';
import { Slide } from 'react-awesome-reveal';
import { CardGroup } from 'react-bootstrap';

const Classes = () => {
    const [appclasses, setAppclasses] = useState([]);
    useEffect(() => {
        fetch(`https://aperture-academy-server.vercel.app/appclasses`)
            .then(res => res.json())
            .then(data => setAppclasses(data))
    }, [])

    return (
        <div className='mt-5 bg-image p-5' style={{ backgroundImage: `url("https://imaginem.io/blacksilver/wp-content/uploads/sites/2/2019/03/events-background-4.jpg")`, backgroundAttachment: "fixed" }}>
            <h1 className='text-center'>Our Classes</h1>
            <Slide>
                <CardGroup>
                    {
                        appclasses?.map(cls => <Class2
                            key={cls._id}
                            cls={cls}
                        ></Class2>)
                    }
                </CardGroup>
            </Slide>
        </div>
    );
};

export default Classes;