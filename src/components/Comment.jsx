const Comment = (props) => {
    const comment = props.comment

    return (
        <div className="comment-block">
            <div>{'➜'}</div>
            <div className="comment">{comment.comment}</div>
        </div>
    )
}

export default Comment