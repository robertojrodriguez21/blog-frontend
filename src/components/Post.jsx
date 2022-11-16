import Comment from "./Comment"

const Post = (props) => {
    const postComments = props.postComments
    const handleSubmit = async (e) => {
        await props.createPost(e)
        window.location.reload(false)
    }

    let titleBar

    if (props.user) {
        titleBar = (
            <>
            <div className="post-title-bar">
                <div><button className="delete-button" onClick={props.handleDelete}>X</button></div>
                <div><button className="edit-button" onClick={''}>✎</button></div>
                <div className="post-title">{postComments.title}</div>
            </div>
            </>
        )
    }

    let publicTitleBar = (
        <div className="post-title-bar">
            <div className="post-title">{postComments.title}</div>
        </div>
    )

    return(
        <div className="post">
            {props.user.id === props.postUserId ? titleBar : publicTitleBar}
            <div className="post-body">{postComments.body}</div>
            <div><img className="post-image" src={postComments.image} alt={postComments.title} ></img></div>
            <div className="comments-title">Comments</div>
            {postComments.associated_comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
            <div className="comment-form">
            <form onSubmit={handleSubmit}>
                <textarea required type='text' placeholder="Add Comment"></textarea><br></br>
                <button className="post-comment-button">Post</button>
            </form>
            </div>
        </div>
    )
}

export default Post