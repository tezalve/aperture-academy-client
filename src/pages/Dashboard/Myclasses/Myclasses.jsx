import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import Myclass from './Myclass/Myclass';
import { CardGroup } from 'react-bootstrap';
import { Slide } from 'react-awesome-reveal';
import useInsclasses from '../../../hooks/useInsclasses';

const Myclasses = () => {

    const { user } = useContext(AuthContext);

    const [data] = useInsclasses(user.email);

    return (
        <div>
            <div>
                <h1 className='text-center'>My Classes</h1>
                <Slide>
                    <CardGroup>
                        {
                            data?.map(cls => <Myclass
                                key={cls._id}
                                cls={cls}
                            ></Myclass>)
                        }
                    </CardGroup>
                </Slide>
            </div>
        </div>
    );
};

export default Myclasses;