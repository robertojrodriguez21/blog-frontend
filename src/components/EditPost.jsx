const EditPost = () => {
    return(
        <div className="edit-post">
            <div className="edit-post-title">Edit Post</div>
            <form className='edit-post-form'>
                <label>Edit Post Name: </label>
                <input/>
                <br/><br/>
                <label>Edit Post: </label>
                <input/>
                <br/><br/>
                <label>Edit Image: </label>
                <input/>
                <br/><br/>
                <button className='edit-post-button'>Confirm Changes</button>
            </form>
        </div>
    )
}

export default EditPost