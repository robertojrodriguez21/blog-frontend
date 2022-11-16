import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const CreatePost = (props) => {
    let navigate = useNavigate()

    // Create Post Function
    const handleSubmit = async (e) => {
        await createPost(e)
        navigate('/')
        window.location.reload(false)
    }

    const [newPost, setNewPost] = useState({ title: '', body: '', image: '' })

    const handleChange = (event) => {
        setNewPost({ ...newPost, [event.target.name]: event.target.value })
    }

    const createPost = async (e) => {
        e.preventDefault()
        const createdPost = {
        ...newPost,
        userId: props.user.id
        }
        await axios.post(`${props.BASE_URL}/post/create`, createdPost)
    
        setNewPost({ title: '', body: '', image: '' })
    }

    return (
        <div className="create-post">
            <div className="create-post-title">Create Post</div>
            <form className='create-post-form' onSubmit={handleSubmit}>
                <label>Post Name: </label>
                <input required type='text' value={newPost.title} onChange={handleChange} name={'title'}></input>
                <br></br><br></br>
                <label>Post: </label>
                <input required type='text' value={newPost.body} onChange={handleChange} name={'body'}></input>
                <br></br><br></br>
                <label>Post Image Link: </label>
                <input type='text' value={newPost.image} onChange={handleChange} name={'image'} placeholder={'Optional'}></input>
                <br></br><br></br>
                <button className='create-post-button'>Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost