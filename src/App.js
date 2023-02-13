import React, { useState } from "react";
import "./components/style/style.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import getId from "./components/getId";



function App() {

    const [posts, setPosts] = useState([
        { id: getId(), title: "JavaScript", body: "Js is most integrated to web development language sdfdsfdsfdsfds" },
        { id: getId(), title: "JavaS", body: "Js is most integrated to web " },
        { id: getId(), title: "JS", body: "Js is most integrated" },
    ])





    // function getId() {
    //     // generates unique key
    //     let id = String(Date.now());
    //     let rand = String(Math.round(Math.random() * 10 ** 15))
    //     return id + rand
    // }

    function getNewPosts(newPost) {
        return setPosts([...posts, newPost])
    }

    return (
        <div className="wrapper">
            <div className="container">
                <PostForm posts={getNewPosts} />
                <PostList posts={posts} title="new title" />
            </div>
        </div>
    )
}
export default App;