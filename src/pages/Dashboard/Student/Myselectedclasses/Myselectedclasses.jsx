import React, { useContext, useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import useSelectedclasses from '../../../../hooks/useSelectedclasses';
import Myselectedclass from './Myselectedclass';
import { AuthContext } from '../../../../Providers/AuthProviders';
import { Slide } from 'react-awesome-reveal';

const Myselectedclasses = () => {

    const {user} = useContext(AuthContext);

    const [data] = useSelectedclasses(user.email);
    
    return (
        <div>
            <h1 className='text-center'>My Classes</h1>
            <Slide>
                <CardGroup>
                    {
                        data?.map(cls => <Myselectedclass
                            key={cls._id}
                            cls={cls}
                        ></Myselectedclass>)
                    }
                </CardGroup>
            </Slide>
        </div>
    );
};

export default Myselectedclasses;