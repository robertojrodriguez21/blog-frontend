const Comment = (props) => {
    const comment = props.comment

    return (
        <div>
            <div className="comment">{comment.comment}</div>
        </div>
    )
}

export default Comment