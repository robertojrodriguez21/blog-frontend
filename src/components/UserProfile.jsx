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
          <h3 className="user">First Name: <span className="profile-font">{props.user.firstName}</span></h3>
        </div>
        <div className="userProfile" id="align">
          <h3 className="user">Last Name: <span className="profile-font">{props.user.lastName}</span></h3>
        </div>
        <div className="userProfile" id="align">
          <h3 className="user">Email: <span className="profile-font">{props.user.email}</span></h3>
        </div>
        <div className="userProfile" id="align">
          {props.user.location !== '' ? <h3 className="user">Location: <span className="profile-font">{props.user.location}</span></h3>: null}
        </div>
      </div>
      <div>
      <button className='delete-user-button' onClick={handleDelete}>Delete Account</button>
      </div>
    </div>
  )
}

export default UserProfile