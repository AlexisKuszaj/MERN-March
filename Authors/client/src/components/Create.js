import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Create = (props) => {
    const [writer, setWriter] = useState({
        author: ''
    })
    const [errors, setErrors] = useState({});
    const { id } = useParams()
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setWriter({ ...writer, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const { author } = writer;
        let errors = {}
        if (!author) {
            errors.author = { message: 'Author name required' };
          } else if (author.length < 3) {
            errors.author = { message: 'Author name must be at least 3 characters' };
          }
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            axios
                .post('http://localhost:8000/api/newAuthor', { author })
                .then((res) => {
                    console.log(res);
                    console.log(res.data.writer);
                    navigate(`/author/${res.data.writer._id}`, { state: { writer: res.data.writer } })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div>
            <div>
                <h1>Favorite Authors</h1>
                <p>Add your favorite author below: </p>
                <form onSubmit={submitHandler}>
                    <div className='fields'>
                        <label>Author</label>
                        <input value={writer.author} name='author' type='text' onChange={changeHandler} />
                        {errors.author && <p>{errors.author.message}</p>}
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create 