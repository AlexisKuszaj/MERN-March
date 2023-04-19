import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react'

const Display = (props) => {
    const { PMList, setPMList } = props
    useEffect(() => {
        axios.get('http://localhost:8000/api/allManagers')
            .then((response) => {
                console.log(response);
                setPMList(response.data.managers)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    
    return (
    <div className="Main">     {
            PMList.map((manager) => (
                <div key={manager._id}>
                    <h3>{manager.product}</h3>
                    <h2>Price: {manager.price}</h2>
                    <h2>Description: {manager.description}</h2>
                </div>
            ))
        }
    </div>
    )
    }
export default Display;
