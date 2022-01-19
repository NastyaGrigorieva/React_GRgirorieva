import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postServise} from "../../services/post.servise";

export const PostDetails = () => {
    const {id} = useParams();

    const [post, setUser] = useState(null);

    useEffect(async () => {
        const post = await postServise.getById(id)
        setUser(post);
    }, [id]);

    useEffect(() => {
        setUser(false);
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
            <div className={'details'}>
                <ul>
                    <li>{post.userId}</li>
                    <li> {post.id}</li>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                </ul>
                <button onClick={() => setUser(post.id)}> Покажися</button>
            </div>
        </div>
    );
};