import React from "react";


export const Comment = ({comment}) => {
    return (
        <div>
            <b>{comment.postId} - {comment.id}</b>

            {comment.name}{comment.email}{comment.body}
        </div>
    );
};