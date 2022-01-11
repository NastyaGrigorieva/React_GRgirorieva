import {useEffect, useState} from "react";

import {Post} from "../Post/Post.js";

export const Posts = () => {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    })
    return (
        <div>
            {post.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};