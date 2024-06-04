import { useEffect, useState } from 'react'
import {CreateToDo} from './components/CreateToDo'
import ToDo from './components/ToDo'
import axios from 'axios'

function App() {

  const [todos, setTodos] = useState([])

  const getEffect = async () => {
    console.log('effect');
    const response = await axios.get('http://localhost:3000/todos')
    setTodos(response.data.todos)
  }

  useEffect(() => {
    getEffect()
  }, [])

  return (
    <>
      <div>
        <CreateToDo setTodos={setTodos} todos={todos} />
        <ul>
          <ToDo todos={todos} setTodos={setTodos} />
        </ul>
      </div>
    </>
  )
}

export default App
