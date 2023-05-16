import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove, edit, important, setDoneTodo, setChangeTodo}) => {
    return (
        <>
            <h2 className="todo__title">{title}</h2>
            {posts.map((post, index) =>
                <PostItem
                    setChangeTodo={setChangeTodo}
                    setDoneTodo={setDoneTodo}
                    important={important}
                    edit={edit}
                    remove={remove}
                    number={index + 1}
                    post={post}
                    key={post.id}/>
            )}
        </>
    );
};

export default PostList;