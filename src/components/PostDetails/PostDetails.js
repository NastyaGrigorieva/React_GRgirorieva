import {Outlet, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postServise} from "../../services/post.servise";
import css from "./PostDetails.module.css"

export const PostDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);

    useEffect(async () => {
        const post = await postServise.getById(id)
        setPost(post);
    }, [id]);

    useEffect(() => {
        setPost(false);
    }, [id]);

    if (!post) {
        return (
            <div>
                буль буль буль
            </div>
        );
    }

    return (
        <div>
            <div>
                <ul>
                    <li>{post.userId}</li>
                    <li> {post.id}</li>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                </ul>
                <button className={css.button} onClick={() => navigate('comments')}> Покажися</button>
            </div>
            <Outlet/>
        </div>
    );
};