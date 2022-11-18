import axios from "axios"
import { useNavigate } from "react-router-dom";


const UserProfile = (props) => {
  let navigate = useNavigate()

  // Deletes user
  const handleDelete = async (e) => {
    e.preventDefault()
    await axios.delete(`${props.BASE_URL}/user/${props.user.id}`)
    props.handleLogOut()
    navigate('/')
}

  return (
    <div className="user">
      <div className="center-column">
        <div className="userProfile" id="profile-header">
          <h1 className="user">Profile Information</h1>
        </div>
        <div className="userProfile" id="align">
          <h3 className="user"><span className="text">First Name:</span> {props.user.firstName}</h3>
        </div>
        <div className="userProfile" id="align">
          <h3 className="user"><span className="text">Last Name: </span> {props.user.lastName}</h3>
        </div>
        <div className="userProfile" id="align">
          <h3 className="user"><span className="text">Email: </span> {props.user.email}</h3>
        </div>
        <div className="userProfile" id="align">
          {props.user.location !== '' ? <h3 className="user"><span className="text">Location: </span> {props.user.location}</h3> : null}
        </div>
      </div>
      <div>
      <button className='delete-user-button' onClick={handleDelete}>Delete Account</button>
      </div>
    </div>
  )
}

export default UserProfile