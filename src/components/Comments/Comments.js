import React, {useEffect, useState} from 'react';

import {Comment} from "../Comment/Comment";


export const Comments = () => {
    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/')
            .then(value => value.json())
            .then(value => setComment(value));
    })
    return (
        <div>

            {comment.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

