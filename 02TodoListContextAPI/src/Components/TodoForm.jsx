import { useState } from "react"
import { useTodo } from "../Context"

function TodoForm() {
    const [todoMsg,setTodoMsg] = useState('')
    const {addTodo} = useTodo()

    const add = (e) =>{
        e.preventDefault()
        if(todoMsg==='') return
        addTodo(todoMsg)
        //console.log(todoMsg)
        setTodoMsg('')
    }

    return(
        <form onSubmit={add}>
            <div className="pb-4 flex w-2/4 mx-auto border-transparent ">
                <input 
                type='text'
                className='mr-100 w-4/5 h-12 text-lg border-transparent rounded-s-lg'
                placeholder='   Write Todo...'
                value={todoMsg}
                onChange={ (e) => setTodoMsg(e.target.value) }
                />
                <button className="bg-lime-600 h-12 w-1/5 hover:bg-lime-500 border-transparent rounded-e-lg"
                type="submit"
                >Add</button>
            </div>
        </form>
        
    )
}

export default TodoForm