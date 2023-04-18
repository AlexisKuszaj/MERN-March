import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


const AddPet = (props) => {
  const [shelter, setShelter] = useState({
    name: '',
    type: '',
    description: '',
      skill1: '',
      skill2: '',
      skill3: ''
    })
    const [errors, setErrors] = useState({})
    const changeHandler = (e) => {
        setShelter({ ...shelter, [e.target.name]: e.target.value })
      }
  const submitHandler = (e) => {
  e.preventDefault();
  
  const { name, type, description } = shelter;
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
  axios.post('http://localhost:8000/api/newlyCreatedShelter', shelter)
  .then((res) => {
      console.log(res);
      window.location.href='/';
    })
    .catch((err) => {
      console.log(err.response.data.errors);
      setErrors(err.response.data.errors);
    })

};


    return (
        <div>
<Link className='home' to={'/'}>Home</Link>
             <h1>Pet Shelter</h1>
            <h2>Know a pet needing a home?</h2>
            <form onSubmit={submitHandler}>
                <div className='main'>
                <div>
                    <label>Pet Name:</label>
                    <input type='text' name="name" onChange={changeHandler} value={shelter.name} />
                    {
                        errors.name ?
                            <p>{errors.name.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label>Pet Type:</label>
                    <input type='text' name="type" onChange={changeHandler} />
                    {
                        errors.type ?
                            <p>{errors.type.message}</p> :
                            null
                    }

                </div>
                <div>
                    <label>Pet Desctription:</label>
                    <input type='text' name="description" onChange={changeHandler} />
                    {
                        errors.description ?
                        <p>{errors.description.message}</p> :
                        null
                      }
                      <button className='addbtn'>Add Pet</button>
                </div>
                </div>
                <div className='skills'>
                <h3>Skills Optional</h3>
                <div>
                    <label>Skill 1:</label>
                    <input type='text' name="skill1" onChange={changeHandler} />
                    {
                        errors.skill1 ?
                            <p>{errors.skill1.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label>Skill 2:</label>
                    <input type='text' name="skill2" onChange={changeHandler} />
                    {
                        errors.skill2 ?
                            <p>{errors.skill2.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label>Skill 3:</label>
                    <input type='text' name="skill3" onChange={changeHandler} />
                    {
                      errors.skill3 ?
                            <p>{errors.skill3.message}</p> :
                            null
                    }
                </div>
                      </div>
            </form>
        </div>
    )
}

export default AddPet;
//test change for github