import { useNavigate } from "react-router-dom";

const CreatePost = (props) => {

    // Create Post Function
    const handleSubmit = (e) => {
        props.addList(e)
    }

    return (
        <div className="create-post">
            <div className="create-post-title">Create Post</div>
            <form className='create-post-form' onSubmit={handleSubmit}>
                <label>Post Name: </label>
                {/* <input required type='text' value={newPost.postName} onChange={props.handlePostChange} name={'postName'}></input> */}
                <input required type='text'></input>
                <br></br><br></br>
                <label>Post: </label>
                {/* <input required type='text' value={newPost.postBody} onChange={props.handlePostChange} name={'postBody'}></input> */}
                <textarea required rows={'10'} cols={'50'} ></textarea>
                <br></br><br></br>
                <label>Post Image Link: </label>
                {/* <input required type='text' value={newPost.postImage} onChange={props.handlePostChange} name={'postImage'}></input> */}
                <input required type='text'></input>
                {/* Add axios call to get userId here */}
                <br></br><br></br>
                <button className='create-post-button'>Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost