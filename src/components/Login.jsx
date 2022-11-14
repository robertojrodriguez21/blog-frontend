import {useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SignInUser } from '../services/Auth'

const Login = (props) => {
    const [formValues, setFormValues] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({ email: '', password: '' })
        props.setUser(payload)
        props.toggleAuthenticated(true)
        navigate('/feed')
    }

    return(
        <div className="login">
            <div className="login-title">Login</div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Email: </label>
                <input/>
                <br></br><br></br>
                <label>Password: </label>
                <input/>
                <br></br><br></br>
                <button className="login-button">Log In</button>
            </form>
        </div>
    )
}

export default Login