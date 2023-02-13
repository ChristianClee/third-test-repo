import React from 'react';


function PostItem({ post }) {
    // console.log(post)
    return (
        <div className="posts">
            <div className="posts__body">
                <div className="post__insctipt">
                    <div className="post__title">{post.title}</div>
                    <div className="post__subtitle">{post.body}</div>
                </div>
                <button className="btn">delete</button>
            </div>
        </div>
    );
}
export default PostItem;