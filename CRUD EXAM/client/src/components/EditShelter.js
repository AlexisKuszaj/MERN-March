import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const EditShelter = (props) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [shelter, setShelter] = useState({
        name: '',
        type: '',
        description:'',
        skill1: '',
        skill2: '',
        skill3: ''
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setShelter({ ...shelter, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/updateShelter/${id}`)
            .then((res) => {
                console.log(res.data); // Log the response data to check the field names
                setShelter(res.data.shelter)
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/')


        const { name, type, description} = shelter;
        const errors = {};

        if (!name) {
            errors.name = { message: "Pet name is required" };
        } else if (name.length < 3) {
            errors.name = { message: "Pet name must be at least 3 characters" };
        }

        if (!type) {
            errors.type = { message: "Pet type is required" };
        } else if (type.length < 3) {
            errors.type = { message: "Pet type must be at least 3 characters" };
        }

        if (!description) {
            errors.description = { message: "Pet description is required" };
        } else if (description.length < 3) {
            errors.description = { message: "Pet description must be at least 3 characters" };
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        axios.put(`http://localhost:8000/api/updateShelter/${id}`, shelter)
            .then((res) => {
                console.log(res);
                <Link className='home' to={'/'}>back to home</Link>
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
              <Link className='home' to={'/'}>back to home</Link>
            <h1>Pet Shelter</h1>
            <h2>Edit</h2>
            <form onSubmit={submitHandler}>
                <div>
                <div>
                    <label>Pet Name:</label>
                  <input type='text' name="name" onChange={changeHandler} value={shelter.name} />

                </div>
                <div>
                    <label>Pet Type:</label>
                    <input type='text' name="type" onChange={changeHandler} value={shelter.type} />

                </div>
                <div>
                <div>
                    <label>Pet Description:</label>
                    <input type='text' name="description" onChange={changeHandler} value={shelter.description} />
                    </div>
                </div>
                <button className="editbtn">Edit Pet</button>
                <h3>Skills Optional</h3>
                <div>
                    <label>Skill 1:</label>
                    <input type='text' name="skill1" onChange={changeHandler} />
                </div>
                <div>
                    <label>Skill 2:</label>
                    <input type='text' name="skill2" onChange={changeHandler} />
                </div>
                <div>
                    <label>Skill 3:</label>
                    <input type='text' name="skill3" onChange={changeHandler} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditShelter