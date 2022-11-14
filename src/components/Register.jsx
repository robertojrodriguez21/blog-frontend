const Register = () => {
    return(
        <div className="register">
            <div className="register-title">Register</div>
            <form className="register-form">
                <label> First Name: </label>
                <input/>
                <br></br><br></br>
                <label> Last Name: </label>
                <input/>
                <br></br><br></br>
                <label> Enter Email Address: </label>
                <input/>
                <br></br><br></br>
                <label> Enter Password: </label>
                <input/>
                <br></br><br></br>
                <label> Verify Password: </label>
                <input/>
                <br></br><br></br>
                <label> Location: </label>
                <input/>
                <br></br><br></br>
                <button className="register-button">Create Account</button>
            </form>
        </div>
    )
}

export default Register