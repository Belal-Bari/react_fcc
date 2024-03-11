
import { useState } from "react";
import { useTodo } from "../Context";
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
}

function TodoList({ todos }){
    const [message,setMessage] = useState(todos.message)
    const [editable,setEditable] = useState(false)

    const {updateTodo,deleteTodo,completedTodo} = useTodo()

    const update = () =>{
        updateTodo(todos.id, {...todos, message: message, completed: todos.completed})
    }

    const del = () => {
        deleteTodo(todos.id)
    }

    const complete = () => {
        //console.log(todos.message)
        completedTodo(todos.id)
    }
    
    return(
        <div className=" mx-auto w-2/4 flex justify-center py-4 gap-1">
            <input  
            className="w-10"
            type='checkbox'
            checked={todos.completed}
            onChange={complete}
            />

            <input 
            className={`w-4/5 h-10 ${(todos.completed)?'bg-lime-300':'bg-slate-300'} border-none `}
            type='text'
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            readOnly={!editable}
            />

            <button
            className="border-none w-10 bg-yellow-300 text-black"
            onClick={()=>{
                if(todos.completed) return
                if(editable){
                    update()
                    setEditable(!editable)
                }else{setEditable(!editable)}
            }}
            disabled={todos.completed}
            >{(editable)? '📁':'🖉'}</button>

            <button
            className="border-none w-10 bg-red-600 text-black"
            onClick={()=>{del()}}
            >🯀</button>
        </div>
    )
}

export default TodoList