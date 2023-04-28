import React from "react";

import Button from 'react-bootstrap/Button';

import { Link, useNavigate } from 'react-router-dom';

import { useState } from "react";

function Home() {
    const navigate = useNavigate();
    const [nav, setNav] = useState(true);
    const [nav2, setNav2] = useState(true);

    const onClickHandeler = () => {
        setNav(!nav);
        setNav2(!nav2);
        navigate('/ReactApp');
    }
    const onClickBack = () => {
        setNav(!nav);
        navigate('/');
    }
    const onClickBack2 = () => {
        setNav2(!nav2);
        navigate('/');
    }
    const onClickHandeler2 = () => {
        setNav2(!nav2);
        navigate('/Sample');
    }
    return (
        <>
            <div className="hright text-center">
            
                {nav ?
                    <Button variant='success' size='lg' onClick={onClickHandeler}>React App</Button>
                    :
                    <Button className="fixed-top" variant='success' size='sm' onClick={onClickBack}>Home Page</Button>


                }
            </div>
            <div className="hleft text-center">

                {
                    nav2 == 1 && nav ?
                        <Button variant='success' size='lg' onClick={onClickHandeler2}>Sample</Button>
                        :
                        nav == 1 ?
                            <Button variant='success' onClick={onClickBack2}>Back</Button>
                            :
                            <></>
                }
            </div>


        </>
    )
}

export default Home;