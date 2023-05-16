import React, {useState, useEffect} from 'react';


const TodoTitleGreetings = () => {

    const [name, setName] = useState("")
    const [addName, setAddName] = useState(false)

    // useEffect(() => {
    //     if (localStorage.getItem('name') !== null) {
    //         setName(JSON.parse(localStorage.getItem('name')))
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('posts', JSON.stringify(name))
    // }, [name])

    const nameAdd = (e) => {
        e.preventDefault()
        if (e.target.value) {
            setAddName(prev => !prev)
        }
        setName(name)
        setAddName(prev => !prev)
    }



    return (
        <div className="greetings">
          <h1 className="title">
              Whats Up,
              <form onSubmit={nameAdd}>
                  <input
                      placeholder="Add Name..."
                      className="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"/>
              </form>
          </h1>
        </div>
    );
};

export default TodoTitleGreetings;