import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const OnePet = () => {
    const [shelter, setShelter] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneSingleShelter/${id}`)
            .then((res) => {
                console.log(res);
                setShelter(res.data.shelter);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteAnExistingShelter/${id}`)
            .then(() => {
                setShelter({});
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='OnePetMain'>
            <h1>Pet Shelter</h1>
            <h2>Details about:  </h2>
            <Link className='home' to='/'>back to home</Link>
            <div className='OnePet'>
                <button onClick={deleteHandler}>Adopt </button>
                <h2>Pet Type:  </h2>
                <h2> Description:</h2>
                <h2>Skills: </h2>
            </div>
        </div>
    );
};

export default OnePet;