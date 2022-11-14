const Comment = () => {
    return (
        <div>
            <form className='item-add-link-form' onSubmit={handleLinkSubmit}>
                <label>Add Comment: </label>
                <input required type='text' value={newComment.comment} onChange={props.handleCommentChange} name={'comment'}></input>
            </form>
        </div>
    )
}

export default Comment