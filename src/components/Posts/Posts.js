import {useEffect, useState} from "react";

import {Post} from "../Post/Post.js";
import '../../App.css'
import {getPostByUserId} from "../../services/API";

export const Posts = ({userId}) => {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        getPostByUserId(userId).then((json) => setPosts(json));
    }, [userId]);

    return (
        <div className={'post'}>
            {post.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};