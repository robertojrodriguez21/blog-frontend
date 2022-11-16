import Post from './Post'


const MyBlog = (props) => {
const postsComments = props.postsComments
const user = props.user

let postCounter = postsComments.length
console.log('this is length', postCounter)

const reducePostCounter = () => {
  postCounter -= 1
  console.log(postCounter)
  if (postCounter === 0) {
    console.log('hit')
    return <h1>Add a Post to See This Page!</h1>
  } 
}

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