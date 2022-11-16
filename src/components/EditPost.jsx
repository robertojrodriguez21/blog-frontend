import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const EditPost = (props) => {
    let navigate = useNavigate()
    let {postId} = useParams()
    const [post, setPost] = useState({})
    

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get(`${props.BASE_URL}/post/${postId}`)
            setPost(response.data)
        }
        getPost()
    }, [])

    

    const handleSubmit = async (e) => {
        await editPost(e)
        navigate('/')
        window.location.reload(false)
    }

    const [newPost, setNewPost] = useState({ title: '', body: '', image: '' })

    const handleChange = (event) => {
        setNewPost({ ...newPost, [event.target.name]: event.target.value })
    }

    const editPost = async (e) => {
        e.preventDefault()
        let title, body, image
    
        if (newPost.title === '') {
            title = post.title
        } else {
            title = newPost.title
        }
    
        if (newPost.body === '') {
            body = post.body
        } else {
            body = newPost.body
        }
    
        if (newPost.image === '') {
            image = post.image
        } else {
            image = newPost.image
        }
    
        const editedPost = {
            title: title,
            body: body,
            image: image,
        }
    
        await axios.put(`${props.BASE_URL}/post/${post.id}`, editedPost)
    
        setNewPost({ title: '', body: '', image: '' })
    }

    return(
        <div className="edit-post"> 
            <div className="edit-post-title">Edit Post</div>
            <form className='edit-post-form' onSubmit={handleSubmit}>
                <label>Edit Post Name: </label>
                <input  type='text' placeholder={post.title} value={newPost.title} onChange={handleChange} name = {'title'}/>
                <br/><br/>
                <label>Edit Post: </label>
                <input  type='text' placeholder={post.body} value={newPost.body} onChange={handleChange} name={'body'}/>
                <br/><br/>
                <label>Edit Image: </label>
                <input  type='text' placeholder={post.image} value={newPost.image} onChange={handleChange} name={'image'}/>
                <br/><br/>
                <button className='edit-post-button'>Confirm Changes</button>
            </form>
        </div>
    )
}

export default EditPost