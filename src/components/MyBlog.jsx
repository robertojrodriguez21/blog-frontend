import Post from './Post'


const MyBlog = (props) => {
const postsComments = props.postsComments
const user = props.user

  return (
  <div>
    
    {postsComments.map((postComments) => (
          user.id === postComments.userId ? <Post key={postComments.id} postComments={postComments} user={props.user} postUserId={postComments.userId} BASE_URL={props.BASE_URL}/>
          : null
          ))}
  </div>
  )
}

export default MyBlog