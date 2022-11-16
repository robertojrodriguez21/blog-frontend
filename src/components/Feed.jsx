import Post from './Post'
import CreatePost from './CreatePost'

const Feed = (props) => {
    const postsComments = props.postsComments


    return (
        <div>
            <div className='feed-title'>FEED</div>
            {postsComments.map((postComments) => (
                <Post key={postComments.id} postComments={postComments} user={props.user} postUserId={postComments.userId}/>
            ))}
        </div>
    )
}

export default Feed