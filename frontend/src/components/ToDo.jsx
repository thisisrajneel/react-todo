export default function ToDo( {todos} ) {
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
                    <button>
                        completed : {todo.completed ? 'true' : 'false'}
                    </button>
                </li>
            )
        })}
    </>
}