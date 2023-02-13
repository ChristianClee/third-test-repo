import React from 'react';
import PostItem from "./PostItem"


function PostList({ posts, title }) {
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            {posts.map(post => { return <PostItem post={post} key={post.id} /> })}
        </div>
        
    );
}
export default PostList;