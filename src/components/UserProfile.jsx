import axios from "axios"
import { useNavigate } from "react-router-dom";


const UserProfile = (props) => {
  let navigate = useNavigate()

  const handleDelete = async (e) => {
    e.preventDefault()
    await axios.delete(`${props.BASE_URL}/user/${props.user.id}`)
    props.handleLogOut()
    navigate('/')
}

  return (
    <div className="user">
      <div>
      <h1>Profile Information</h1>
      </div>
      <div className="center-column">
        <div className="userProfile" id="align">
          <h3 className="user">First Name: {props.user.firstName}</h3>
        </div>
        <div className="userProfile" id="align">
          <h3 className="user">Last Name: {props.user.lastName}</h3>
        </div>
        <div className="userProfile" id="align">
          <h3 className="user">Email: {props.user.email}</h3>
        </div>
        <div className="userProfile" id="align">
          <h3 className="user">Location: {props.user.location}</h3>
        </div>
      </div>
      <div>
      <button className='delete-user-button' onClick={handleDelete}>Delete Account</button>
      </div>
      <div>
      <button className='update-password-button'>Update Password</button>
      </div>
    </div>
  )
}

export default UserProfile