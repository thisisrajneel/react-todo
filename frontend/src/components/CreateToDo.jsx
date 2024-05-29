export function CreateToDo ( {setTodos, todos} ) {

    const AddToDo = () => {

        const title = document.getElementById('titleInput').value
        const description = document.getElementById('descriptionInput').value
        console.log(title, description);

        const newToDo = {
          title: title,
          description: description,
          completed: false
        }
        console.log(newToDo)
    
        setTodos(todos.concat(newToDo))
    }

    return <div>
        <input id="titleInput" type='text' placeholder="title" /> <br />
        <input id="descriptionInput" type='text' placeholder="description" /> <br />
        <button onClick={AddToDo}>Create new todo</button>
    </div>

}