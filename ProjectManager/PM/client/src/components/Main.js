


import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';

const Display = (props) => {
  const { PMList, setPMList } = props;
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/allManagers')
      .then((response) => {
        console.log(response);
        setPMList(response.data.managers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const createManager = {
      product,
      price,
      description
    };
    axios.post('http://localhost:8000/api/newManager', createManager)
      .then((response) => {
        console.log(response);
        setPMList([...PMList, response.data.manager]);
        setProduct('');
        setPrice('');
        setDescription('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Main">
      <h1>Product Manager</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="product">Product:</label>
          <input type="text" id="product" value={product} onChange={(e) => setProduct(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <button type="submit">Add Product Manager</button>
      </form>
      {
        PMList.map((manager) => (
          <div key={manager._id}>
            <h2>{manager.product}</h2>
            <h3>Price: {manager.price}</h3>
            <h3>Description: {manager.description}</h3>
          </div>
        ))
      }
    </div>
  );
};

export default Display;