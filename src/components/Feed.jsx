import { useReducer } from 'react'
import Post from './Post'
import { useNavigate } from 'react-router-dom'

const Feed = (props) => {
    const postsComments = props.postsComments

    let navigate = useNavigate()

    return props.user && props.authenticated ? (
        <div>
            <div>FEED</div>
            {postsComments.map((postComments) => (
                <Post key={postComments.id} postComments={postComments} />
            ))}
        </div>
    ) : (
        <div className="protected">
          <h3>Oops! You must be signed in to do that!</h3>
          <button onClick={() => navigate('/login')}>Sign In</button>
        </div>
      )
}

export default Feed