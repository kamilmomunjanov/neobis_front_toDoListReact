import React, {useState, useEffect} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import TodoBottom from "./components/TodoBottom";
import TodoTitleGreetings from "./components/TodoTitleGreetings";



function App() {
    const [posts, setPosts] = useState([])
    const [name, setName] = useState("")
    const [addName, setAddName] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('posts') !== null) {
            setPosts(JSON.parse(localStorage.getItem('posts')))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts])

    const deleteTodo =(post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

    const setImportantTodo = (post) => {
        setPosts(posts.map((el) => {
            if (el.id === post.id){
                return {...el, isImportant: !el.isImportant}
            }
            return el
        }))
    }

    const setDoneTodo = (post) => {
        setPosts(posts.map((el) => {
            if (el.id === post.id){
                return {...el, isDone: !el.isDone}
            }
            return el
        }))
    }

    const setChangeTodo = (post, title) => {
        setPosts(posts.map((el) => {
            if (el.id === post.id){
                return {...el, title: title}
            }
            return el
        }))
    }


    return (
        <div className="App">
            <TodoTitleGreetings/>
            <PostForm posts={posts} setPosts={setPosts}/>
            {
                posts.length !== 0
                ? <PostList
                        setChangeTodo={setChangeTodo}
                        important={setImportantTodo}
                        remove={deleteTodo}
                        setDoneTodo={setDoneTodo}
                        posts={posts}
                        title="TODO LIST"/>
                    : <div className="todo__title">TODO LIST NONE</div>
            }
            <TodoBottom posts={posts} setPosts={setPosts}/>
        </div>
    );
}

export default App;
