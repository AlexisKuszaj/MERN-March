import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';

const Create = (props) => {
    const [manager, setManager] = useState({
        product:'',
        price:'',
        description:''
    });
  const changeHandler = (e) => {
    setManager({...manager, [e.target.name]:e.target.value})
  }
const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/newManager', manager)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => [
        console.log(err)
    ])
}

  return (
    <div className="Create">
      <form onSubmit={submitHandler}>
        <div>
            <label>Product: </label>
            <input type='text' name='product' onChange={changeHandler}/>
        </div>
        <div>
            <label>Price: </label>
            <input type='text' name='price' onChange={changeHandler}/>
        </div>
        <div>
            <label>Description: </label>
            <input type='text' name='description' onChange={changeHandler}/>
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default Create;