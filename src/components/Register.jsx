import {useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Register = () => {
    const [formValues, setFormValues] = useState( { 
        firstName: '',
        lastName: '', 
        email: '', 
        password: '', 
        verifyPassword: '', 
        location: '' 
        }
    )

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/login')
    }

    return(
        <div className="register">
            <div className="register-title">Register</div>
            <form className="register-form" onSubmit={handleSubmit}>
                <label> First Name: </label>
                <input
                    onChange={handleChange}
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formValues.firstName}
                    required/>
                <br></br><br></br>
                <label> Last Name: </label>
                <input
                    onChange={handleChange}
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formValues.lastName}
                    required/>
                <br></br><br></br>
                <label> Enter Email Address: </label>
                <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    value={formValues.email}
                    required/>
                <br></br><br></br>
                <label> Enter Password: </label>
                <input
                    onChange={handleChange}
                    name="password"
                    type="password"                    
                    placeholder='Your Password'
                    value={formValues.password}
                    required/>
                <br></br><br></br>
                <label> Verify Password: </label>
                <input
                    onChange={handleChange}
                    name="verifyPassword"
                    type="password"                    
                    placeholder='Your Password'
                    value={formValues.verifyPassword}
                    required/>
                <br></br><br></br>
                <label> Location: </label>
                <input
                    onChange={handleChange}
                    name="location"
                    type="text"
                    placeholder="Location"
                    value={formValues.location}/>
                <br></br><br></br>
                <button className="register-button" disabled={(!formValues.email || !formValues.password || !formValues.firstName || !formValues.lastName) && (formValues.password === formValues.verifyPassword)}>Create Account</button>
            </form>
        </div>
    )
}

export default Register