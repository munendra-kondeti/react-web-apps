import {useState,useEffect} from 'react'
import './style.css'

function rendomId() {
    return Math.floor(Math.random() * 100)
}


function Todo(){

    const [todos,setTodos] = useState([])
    const [input,setInput] = useState('')

    const handleTodo = () => {
        console.log(input)
        setTodos((todos)=> 
        todos.concat({
            text:input,
            id:rendomId(),
        }))
        setInput('')
    }
    const removeTodo = (id) =>{
        setTodos((todos)=> todos.filter((todos)=> todos.id !== id))
    }
    useEffect(() => {
        const keyDownHandler = event => {
          if (event.key === 'Enter') {
            handleTodo(input);
        }
        };
     
        document.addEventListener('keydown', keyDownHandler);
     
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, [input]);
    return(
        <>
        <div className="container">
            <h1 className="todo-title"> TODO's</h1>
            <input type="text" className="input-text" placeholder="New Todo" 
            value={input} onChange={(evn) => setInput(evn.target.value)} />
            <button className="btn-submit" onClick={handleTodo}>Save</button>
            <ul className='todo-list'>
                {
                    todos.map(
                    ({text,id})=> { 
                            return(
                                <li key={id} className='todo'> {text}
                                <button onClick={()=>removeTodo(id)} className='close' >X</button>
                                </li>
                            );
                        }
                    )
                }
            </ul>
        </div>
        </>
    )
}

export default Todo