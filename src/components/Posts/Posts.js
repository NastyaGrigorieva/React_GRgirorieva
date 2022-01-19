import {useEffect, useState} from "react";
import {postServise} from "../../services/post.servise";
import {Post} from "../Post/Post";

export const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const posts = await postServise.getAll()
        setPosts(posts);
    }, []);

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};
