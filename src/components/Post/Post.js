import React from "react";

export const Post = ({post}) =>{
    return(
        <div>
            <b>{post.id} - {post.title} -</b>

            -   {post.body}

        </div>
    );
};