import axios from "axios"

const Comment = (props) => {
    const comment = props.comment
    const user = props.user

    // Delete comment
    const handleDelete = async (e) => {
        e.preventDefault()
        await axios.delete(`${props.BASE_URL}/comment/${comment.id}`)
        window.location.reload(false)
    }

    // Set comment type; If your comment you can delete comment and if its not yours you can only see the comment
    let commentBar

    if (props.user) {
        commentBar = (
            <div className="comment-block">
                <div><button className="comment-delete-button" onClick={handleDelete}>x</button></div>
                <div className="comment">{comment.comment}</div>
            </div>
        )
    }

    let publicCommentBar = (
        <div className="comment-block">
            <div className="comment">{comment.comment}</div>
        </div>
    )

    // Return
    return (
        user.id === comment.userId ? commentBar : publicCommentBar
    )
}

export default Comment