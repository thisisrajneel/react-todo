import { useState } from "react"
import axios from 'axios'

export function CreateToDo ( {setTodos, todos} ) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const AddToDo = async () => {

        const newToDo = {
          title: title,
          description: description
        }

        const response = await axios.post('http://localhost:3000/todo', newToDo
        )
    
        setTodos(todos.concat(newToDo))
    }

    return <div>
        <input id="titleInput" type='text' placeholder="title" onChange={(e) => setTitle(e.target.value)} /> <br />
        <input id="descriptionInput" type='text' placeholder="description" onChange={(e) => setDescription(e.target.value)} /> <br />
        <button onClick={AddToDo}>Create new todo</button>
    </div>

}