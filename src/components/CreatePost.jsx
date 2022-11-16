import { useNavigate } from "react-router-dom";

const CreatePost = (props) => {
    let navigate = useNavigate()
    // Create Post Function
    const handleSubmit = async (e) => {
        await props.createPost(e)
        navigate('/')
        window.location.reload(false)
    }

    const newPost = props.newPost

    return (
        <div className="create-post">
            <div className="create-post-title">Create Post</div>
            <form className='create-post-form' onSubmit={handleSubmit}>
                <label>Post Name: </label>
                <input required type='text' value={newPost.title} onChange={props.handlePostChange} name={'title'}></input>
                <br></br><br></br>
                <label>Post: </label>
                <input required type='text' value={newPost.body} onChange={props.handlePostChange} name={'body'}></input>
                <br></br><br></br>
                <label>Post Image Link: </label>
                <input required type='text' value={newPost.image} onChange={props.handlePostChange} name={'image'}></input>
                <br></br><br></br>
                <button className='create-post-button'>Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost