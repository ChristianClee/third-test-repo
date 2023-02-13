import React, { useState } from 'react';
import MyButton from "./UI/buttons/MyButton";
import MyInput from "./UI/inputs/MyInput";
import getId from "./getId";

function PostForm({ posts }) {
    // console.log(posts)

    const [data, setData] = useState({ title: "", body: "", })


    function getData(event) {
        // set up data from form to display

        event.preventDefault();

        const newPost = {
            "title": data.title,
            "body": data.body,
            "id": getId(),
        }
        posts(newPost)

        // resets data from form
        setData({ title: "", body: "" })

    }

    return (
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
    );
}
export default PostForm;