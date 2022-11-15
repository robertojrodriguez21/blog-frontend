const Post = (props) => {
    const post = props.post
    const handleEdit = () => {
        
    }

    return(
        <div className="post">
            <button className="delete-button" onClick={props.handleDelete()}>x</button>
            <button className="edit-button" onClick={handleEdit()}>✎</button>
            <div className="post-image"><img src={post.image} alt={post.name} ></img></div>
            <div className="post-title">{post.title}</div>
            <div className="post-body">{post.body}</div>
        </div>
    )
}

export default Post