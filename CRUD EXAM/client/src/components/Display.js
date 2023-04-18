import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

const Display = (props) => {
    const { shelterList, setShelterList } = props;
    useEffect(() => {
        axios.get('http://localhost:8000/api/allShelters')
            .then((res) => {
                console.log(res);
                setShelterList(res.data.Shelters)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Link className='addPetLink' to={'/addPet/form'}>add a pet to the shelter</Link>
            <h1>Pet Shelter</h1>
            <h2>These pets are looking for a good home:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shelterList.map((shelter) => (
                            <tr key={shelter._id}>
                                <td>{shelter.name}</td>
                                <td>{shelter.type}</td>
                                <td><Link to={`/viewShelter/${shelter._id}`}>Details</Link> | <Link to={`/editShelter/${shelter._id}`}> Edit</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}
export default Display;