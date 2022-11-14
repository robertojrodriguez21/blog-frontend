const Feed = (props) => {
    return(
        <div>
            <div>FEED</div>
            {props.posts.map((post) => (
                <Post post={post} />
            ))}
        </div>
    )
}

export default Feed