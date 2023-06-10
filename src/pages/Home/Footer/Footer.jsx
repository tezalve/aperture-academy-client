import React from 'react';
import AA from '../../../../public/logo/AA.png'
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='text-white mt-5' style={{ backgroundImage: `url("https://wallpapers.com/images/hd/red-forest-trees-n8z3bf3dv0b2cj6w.jpg")`, backgroundAttachment: "fixed" }}>
            <div className='row p-5 g-0 text-center align-items-center'>
                <div className='col-md-4'>
                    <h3 className='text-white'>Aperture Academy</h3>
                    <p>Master the art of photography</p>
                </div>

                <div className='col-md-4'>
                    <Image src={AA} width={"100%"}></Image>
                </div>

                <div className='col-md-4'>
                    <p>Email: utv@jmail.com</p>
                    <p>Phone: +990 098097362</p>
                    <p>Address: 57th Street, Neverplace</p>
                </div>
            </div>

            <div className='text-center row g-0 justify-content-around px-5'>
                <Link className='col-md-3 fa-2x'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></Link>
                <Link className='col-md-3 fa-2x'><FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon></Link>
                <Link className='col-md-3 fa-2x'><FontAwesomeIcon icon={faGoogle} ></FontAwesomeIcon></Link>
                <Link className='col-md-3 fa-2x'><FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon></Link>
            </div>

            <div className='pt-3'>
                <h4 className='text-center'>Copyright 2023 @ Aperture Academy</h4>
            </div>

        </div>
    );
};

export default Footer;