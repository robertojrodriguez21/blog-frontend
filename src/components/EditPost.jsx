const EditPost = (props) => {
    const post = props.post
    return(
        <div className="edit-post"> 
            <div className="edit-post-title">Edit Post</div>
            <form className='edit-post-form' onSubmit={props.handleEdit}>
                <label>Edit Post Name: </label>
                <input required type='text' value={post.title} onChange={props.handleChange} name = {'title'}/>
                <br/><br/>
                <label>Edit Post: </label>
                <input required type='text' value={post.body} onChange={props.handleChange} name={'body'}/>
                <br/><br/>
                <label>Edit Image: </label>
                <input required type='text' value={post.body} onChange={props.handleChange} name={'body'}/>
                <br/><br/>
                <button className='edit-post-button'>Confirm Changes</button>
            </form>
        </div>
    )
}

export default EditPost