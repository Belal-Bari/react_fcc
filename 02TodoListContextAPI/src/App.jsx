import { useEffect, useState } from 'react'
import TodoForm from './Components/TodoForm'
import { TodoProvider } from './Context'
import TodoList from './Components/TodoList'


function App() {
  const [todo, setTodo] = useState([])

  const addTodo = (todoMsg) =>{
    setTodo((prev)=>[{id: Date.now(), message: todoMsg, completed:false}, ...prev])
  }

  const updateTodo = (id,newTodo) => {
    setTodo((prev)=>
      prev.map((item)=> 
        (item.id===id) ? newTodo : item
      )
    )
  }

  const deleteTodo = (id) => {
    setTodo((prev)=>
      prev.filter((item)=> item.id!==id)
    )
  }

  const completedTodo = (id) => {
    setTodo((prev)=>
      prev.map((item)=> (item.id===id) ? {...item, completed: !item.completed} : item)
    )
  }
  
  useEffect(()=>{
    const todo = JSON.parse(localStorage.getItem("todo"))
    if (todo && todo.length > 0){
      setTodo(todo)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todo))
  },[todo])
  

  return (
    <TodoProvider value={{todo,addTodo,updateTodo,deleteTodo,completedTodo}}>
      <div className='bg-stone-500 h-screen'>
        <h1 className="pt-20 pb-10 text-3xl text-center font-bold text-orange-400 ">Manage Your Todo`s</h1>
        <TodoForm />
        <div key={todo.id}>
        {todo.map((item)=>
          (<TodoList todos={item} key={item.id}/>) 
        )}
        </div>
      </div>
    </TodoProvider>
    
  )
}

export default App
