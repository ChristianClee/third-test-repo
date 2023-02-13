import React, { useState } from "react";
import "./components/style/style.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/inputs/MyInput";
function App() {

    function getId() {
        let id = String(Date.now());
        let rand = String(Math.round(Math.random()*10**15))
        return id+rand
    }

    getId()

    const [posts, setPosts] = useState([
        { id: getId(), title: "JavaScript", body: "Js is most integrated to web development language sdfdsfdsfdsfds"},
        { id: getId(), title: "JavaS", body: "Js is most integrated to web "},
        { id: getId(), title: "JS", body: "Js is most integrated"},
    ])
    const [title, setTitle] = useState("")
    const [discribe, setDiscribe] = useState("")

    function getData(event) {
        event.preventDefault();
        console.log("title", title)
        console.log("discribe", discribe)
        setTitle("")
        setDiscribe("")
        setPosts([...posts, { id: getId(), title: title, body: discribe }])
    }


    return (
        <div className="wrapper">
            <div className="container">
                <form>
                    <MyInput placeholder="enter the title" value={title} onChange={(event) => setTitle(event.target.value)} />
                    <MyInput placeholder="enter text" value={discribe} onChange={(event) => setDiscribe(event.target.value)} />
                    <MyButton onClick={getData} >check out</MyButton>
                </form>
                <PostList posts={posts} title="new title"/>
           
            </div>
        </div>
    )
}
export default App;