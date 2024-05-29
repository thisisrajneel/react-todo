import { useState } from 'react'
import {CreateToDo} from './components/CreateToDo'
import ToDo from './components/ToDo'

function App() {

  const [todos, setTodos] = useState([])

  return (
    <>
      <div>
        <CreateToDo setTodos={setTodos} todos={todos} />
        <ul>
          <ToDo todos={todos} />
        </ul>
      </div>
    </>
  )
}

export default App
