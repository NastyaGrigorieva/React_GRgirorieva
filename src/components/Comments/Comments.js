import {useEffect, useState} from "react";

import {Comment} from "../Comment/Comment";
import '../../App.css'
import {commentServise} from "../../services/comment.servise";
import {useParams} from "react-router-dom";

export const Comments = () => {
    const {id} = useParams();
    const [comment, setComment] = useState([]);

    useEffect(() => {
        commentServise.getCommentsByPostId(id).then((json) => setComment(json));
    }, [id]);

    return (
        <div>
            {comment.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};