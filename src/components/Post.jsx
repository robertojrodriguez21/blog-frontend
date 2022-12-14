import Comment from "./Comment"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Post = (props) => {
    const postComments = props.postComments
    let navigate = useNavigate()
    const [newComment, setNewComment] = useState({ comment: '' })

    // Handles input change
    const handleChange = (event) => {
        setNewComment({ ...newComment, [event.target.name]: event.target.value })
    }

    // Create new comment
    const createComment = async (e) => {
        e.preventDefault()
        let completeComment = props.user.firstName + ' ' + props.user.lastName + ': ' + newComment.comment
        const createdComment = {
            comment: completeComment,
            userId: props.user.id,
            postId: postComments.id
        }
        await axios.post(`${props.BASE_URL}/comment/create`, createdComment)

        setNewComment({ comment: '' })
    }
    
    // Handles form submit
    const handleSubmit = async (e) => {
        await createComment(e)
        window.location.reload(false)
    }

    // Edit post
    const handleEdit = () => {
        navigate(`/editPost/${postComments.id}`)
    }

    // Delete post
    const handleDelete = async (e) => {
        e.preventDefault()
        await axios.delete(`${props.BASE_URL}/post/${postComments.id}`)
        window.location.reload(false)
    }

    // Set title bar type: If user own post they can edit and delete, if not owner they can only view title
    let titleBar

    if (props.user) {
        titleBar = (
            <div className="post-title-bar">
                <div><button className="delete-button" onClick={handleDelete}>X</button></div>
                <div><button className="edit-button" onClick={handleEdit}>✎</button></div>
                <div className="post-title">{postComments.title}</div>
            </div>
        )
    }

    let publicTitleBar = (
        <div className="post-title-bar">
            <div className="post-title">{postComments.title}</div>
        </div>
    )
    
    // Return
    return(
        <div className="post">
            <div className="post-div">
            {props.user.id === props.postUserId ? titleBar : publicTitleBar}
            <div className="post-body">{postComments.body}</div>
            {postComments.image !== '' ? <div><img className="post-image" src={postComments.image} alt={postComments.title} ></img></div> : null}
            <div className="comments-title">Comments</div>
            {postComments.associated_comments.map((comment) => (
                <Comment key={comment.id} comment={comment} user={props.user} BASE_URL={props.BASE_URL}/>
            ))}
            <div className="comment-form">
            <form onSubmit={handleSubmit}>
                <textarea className="commentTextBox" required type='text' placeholder="Add Comment" value={newComment.comment} onChange={handleChange} name={'comment'}></textarea>
                <button className="post-comment-button">Comment</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Post