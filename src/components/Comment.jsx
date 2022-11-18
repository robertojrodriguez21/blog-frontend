import axios from "axios"

const Comment = (props) => {
    const comment = props.comment
    const user = props.user

    // Delete post
    const handleDelete = async (e) => {
        e.preventDefault()
        await axios.delete(`${props.BASE_URL}/comment/${comment.id}`)
        window.location.reload(false)
    }

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

    return (
        user.id === comment.userId ? commentBar : publicCommentBar
    )
}

export default Comment