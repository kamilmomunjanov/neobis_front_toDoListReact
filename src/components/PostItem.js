import React, {useState} from 'react';


const PostItem = ({post, remove, setChangeTodo, number, important, setDoneTodo}) => {
    const [change, setChange] = useState(false)
    const [changeText, setChangeText] = useState( post.title || "")

    const removeTodo = () => {
        remove(post)
    }

    const importantTodo = () => {
        important(post)
    }

    const checkDone = () => {
        setDoneTodo(post)
    }

    const editTodo = (e) => {
        if (e.target.textContent === "Save") {
            setChange(prev => !prev)
            setChangeTodo(post, changeText)
        } else{
            setChangeTodo(post, changeText)
            setChange(prev => !prev)
        }
    }





    return (
        <div className="post">
            <div className="post__content">
                <div className="post__list">
                    <input
                        checked={post.isDone}
                        className="post__check"
                        type="checkbox"
                        onChange={checkDone}/>


                    {
                        change ? <input placeholder="change..."
                                        className="edit"
                                        value={changeText}
                                        onChange={(e) => setChangeText(e.target.value)}
                                        type="text"/>
                            :
                            <strong
                            style={{color: post.isImportant ? "mediumblue" : '',
                                textDecoration: post.isDone ? "line-through" : ''
                            } }>
                            {number}. {`${post.title} ${post.isImportant ? "- Important!!!" : ""}`}
                        </strong>
                    }

                </div>
                <div className="post__btn">
                    <button
                        style={{background: post.isImportant ? "gold" : ''}}
                        type="button"
                        className="post__button-important"
                        onClick={importantTodo}>
                        {post.isImportant ? "Important" : "NotImportant"}
                    </button>
                    <button
                        type="button"
                        className="post__button-edit"
                        onClick={editTodo}>
                        {change ? "Save" : "Edit"}
                    </button>
                    <button
                        type="button"
                        className="post__button-delete"
                        onClick={removeTodo}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;