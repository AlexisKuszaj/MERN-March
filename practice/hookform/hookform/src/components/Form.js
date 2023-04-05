import React, { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <form>
            <label>First Name:
                <input type='text' name={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {
                    firstName.length < 3 ?
                        <p>Field must be at least 2 characters</p> :
                        null
                }
            </label>
            <label>
                Last Name:
                <input type='text' name={lastName} onChange={(e) => setLastName(e.target.value)} />
                {
                    lastName.length < 3 ?
                        <p>Field must be at least 3 characters</p> :
                        null
                }
            </label>
            <label>
                Email:
                <input type='text' name={email} onChange={(e) => setEmail(e.target.value)} />
                {
                    email.length < 5 ?
                        <p>Field must be at least 5 characters</p> :
                        null
                }
            </label>
            <label>
                        Password:
                        <input type='text' name={password} onChange={(e) => setPassword(e.target.value)} />
                {
                        password.length < 8 ?
                        <p>Field must be at least 8 characters</p> :
                        null
                }
                    </label>
                <label>
                    Confirm Password:
                    <input type='text' name={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {
                        confirmPassword.length < 8 ?
                            <p>Field must be at least 8 characters</p> :
                            null
                    }
                </label>
                </form>
                )
}

                export default Form