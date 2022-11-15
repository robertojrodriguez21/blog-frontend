import Comment from "./Comment"

const Post = (props) => {
    const postComments = props.postComments
    const handleEdit = () => {
        
    }

    return(
        <div className="post">
            <button className="delete-button" >x</button>
            <button className="edit-button" onClick={handleEdit()}>✎</button>
            <div className="post-image"><img src={postComments.image} alt={postComments.name} ></img></div>
            <div className="post-title">{postComments.title}</div>
            <div className="post-body">{postComments.body}</div>
            {postComments.associated_comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
            {/* Add code for user to add a comment here */}
        </div>
    )
}

export default Post