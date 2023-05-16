import React,{useState} from 'react';
import MyInput from "./Ui/input/MyInput";
import MyButton from "./Ui/button/MyButton";


const PostForm = ({ posts, setPosts}) => {


    const addNewTodo = async (e) => {
        let text = e.target[0].value
        e.preventDefault()
        let isHas = posts.some(item => item.title === text)
        if (!isHas) {
            await setPosts((prev) => [...prev, {
                title: text,
                id: Date.now(),
                isImportant: false,
                isDone: false,
            }])
        }else{
            alert("Такая задача уже существует!")
        }
        e.target[0].value = ""

    }

    return (
        <form onSubmit={addNewTodo}>
            <MyInput
                required
                type="text"
                placeholder="e.g. get a milk"/>
            <MyButton type="submit" >ADD TODO></MyButton>
        </form>
    );
};

export default PostForm;