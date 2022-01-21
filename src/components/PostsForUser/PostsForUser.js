import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Post} from "../Post/Post";
import {userServise} from "../../services/user.servise";


export const PostsForUser = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const posts = await userServise.getPostsByUserId(id)
        setPosts(posts);
    }, [id]);

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};
