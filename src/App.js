import React, { useState } from "react";
import "./components/style/style.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/inputs/MyInput";


function App() {

    const [posts, setPosts] = useState([
        { id: getId(), title: "JavaScript", body: "Js is most integrated to web development language sdfdsfdsfdsfds" },
        { id: getId(), title: "JavaS", body: "Js is most integrated to web " },
        { id: getId(), title: "JS", body: "Js is most integrated" },
    ])

 
    const [data, setData] = useState({ title: "", body: "", })


    function getData(event) {
        // set up data from form to display

        event.preventDefault();
        // setPosts makes render from it's data
        setPosts([...posts, { ...data, id: getId() }])
        // resets data from form
        setData({ title: "", body: "" })

    }

    function getId() {
        // generates unique key
        let id = String(Date.now());
        let rand = String(Math.round(Math.random() * 10 ** 15))
        return id + rand
    }

    return (
        <div className="wrapper">
            <div className="container">
                <form>
                    <MyInput
                        placeholder="enter the title"
                        value={data.title}
                        onChange={(event) => setData({ ...data, title: event.target.value })}
                    />
                    <MyInput
                        placeholder="enter text"
                        value={data.body}
                        onChange={(event) => setData({ ...data, body: event.target.value })}
                    />
                    <MyButton onClick={getData} >check out</MyButton>
                </form>
                <PostList posts={posts} title="new title" />
            </div>
        </div>
    )
}
export default App;