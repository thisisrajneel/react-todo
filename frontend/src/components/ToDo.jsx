// const toggleCompleted = (todos, key, setTodos) => {
//     console.log(key, todos);
//     let temp = todos
//     temp = todos.map(t => {
//         if(t.id == key)
//             t.completed = !t.completed
//     })
//     //console.log(temp, todos);
//     console.log(temp);
//     setTodos(temp)
// }

export default function ToDo( {todos, setTodos} ) {
    return <>
        {todos.map(todo => {
            return(
                <li key={Math.random()}>
                    <h5>
                        {todo.title}
                    </h5>
                    <p>
                        {todo.description}
                    </p>
                    {/* <button onClick={() => toggleCompleted(todos, todo.id, setTodos)}>
                        completed : {todo.completed ? 'true' : 'false'}
                    </button> */}
                    <button>
                        completed : {todo.completed ? 'true' : 'false'}
                    </button>
                </li>
            )
        })}
    </>
}