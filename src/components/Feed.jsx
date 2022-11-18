import Post from './Post'
import CreatePost from './CreatePost'

const Feed = (props) => {
    const postsComments = props.postsComments

    // Return
    return (
        <div className='feed-container'>
            <CreatePost user={props.user} BASE_URL={props.BASE_URL} />
            {postsComments.map((postComments) => (
                <Post key={postComments.id} postComments={postComments} user={props.user} postUserId={postComments.userId} BASE_URL={props.BASE_URL}/>
            ))}
        </div>
    )
}

export default Feed