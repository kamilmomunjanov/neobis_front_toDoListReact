import React from 'react';
import MyButton from "./Ui/button/MyButton";

const TodoBottom = ({posts, setPosts}) => {

    const deleteAllDoneTodos = () => {
        setPosts(prev => prev.filter(el => !el.isDone))
    }

    return (
        <div>
            <div className="bottom__text">
                {posts.filter(el => el.isDone).length} of {posts.length} task done
            </div>
            <MyButton onClick={deleteAllDoneTodos}>Remove Checked</MyButton>
        </div>
    );
};

export default TodoBottom;