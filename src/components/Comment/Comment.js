import React from "react";


export const Comment = ({comment}) => {
    return (
        <div>
            <b>{comment.postId} - {comment.id} - {comment.email} </b>

            {comment.name} {comment.body}
        </div>
    );
};