import Post from './Post'

const MyBlog = (props) => {
  const postsComments = props.postsComments
  const user = props.user
  let postCounter = postsComments.length

  // IF no post is returned then tip is returned
  const reducePostCounter = () => {
    postCounter -= 1
    if (postCounter === 0) {
      return <h1 key={user.id}>Add a Post to See This Page!</h1>
    } 
  }

  // Return
  return (
  <div>
    {postsComments.map((postComments) => (
      user.id === postComments.userId ? <Post key={postComments.id} postComments={postComments} user={props.user} postUserId={postComments.userId} BASE_URL={props.BASE_URL}/>
      : reducePostCounter() 
    ))}
  </div>
  )
}

export default MyBlog