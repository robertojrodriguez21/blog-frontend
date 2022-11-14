
const Login = () => {

    return(
        <div className="login">
            <div className="login-title">Login</div>
            <form className="login-form">
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