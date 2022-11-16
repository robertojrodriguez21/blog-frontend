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
console.log(props.user)

  return (
    <div className="user">
      <div>
      <h1>Profile Information</h1>
      </div>
      <div>
      <h3>First Name: {props.user.firstName}</h3>
      </div>
      <div>
      <h3>Last Name: {props.user.lastName}</h3>
      </div>
      <div>
      <h3>Email: {props.user.email}</h3>
      </div>
      <div>
      <h3>Location: {props.user.location}</h3>
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