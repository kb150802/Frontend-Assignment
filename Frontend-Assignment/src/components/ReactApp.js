import React from "react";

import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';

import MyForm from "../containers/form/form";

function ReactApp(props) {
    const [data, setData] = useState('');
    const [check, setCheck] = useState(0);


    useEffect(() => {

    }, [data])
    const getData = (e) => {
        setCheck(check + 1);
        e.preventDefault();


    }
    const handleData = (e) => {

        setData(e.target.value);

    }
    return (
        <>
            <div className="split left">


                <div className="form-wrapper">
                    <h3> Enter Your Schema here </h3>
                    <br />
                    <br />
                    <form>
                        <textarea placeholder='Enter Schema' rows={30} cols={40} onChange={(e) => setData(e.target.value)}></textarea>
                        <br />
                        <br />
                        <br />
                        <Button variant="success" onClick={getData}>Submit</Button>
                    </form>
                </div>
            </div>
            <div className="split right ">

                <div className="form-wrapper">

                    {

                        check ?
                            <>
                                <MyForm Schema={data} />
                            </>
                            :
                            <h1>UI for the Schema</h1>
                    }
                </div>

            </div>
        </>
    )
}

export default ReactApp;