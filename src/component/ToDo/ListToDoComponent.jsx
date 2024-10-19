

function ListToDoComponent() {
    const todayDate = new Date();
    const completionDate = new Date(
      todayDate.getFullYear() + 12,
      todayDate.getMonth(),
      todayDate.getDay()
    );
  
    const todos = [
      {
        id: 1,
        description: "Learn AWS",
        done: false,
        targetDate: completionDate,
      },
      {
        id: 2,
        description: "Learn Azure",
        done: false,
        targetDate: completionDate,
      },
      { id: 3, description: "Learn GC", done: false, targetDate: completionDate },
    ];
    return (
      <div className="container">
        <h1>Things U Want To Do!</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td>id</td>
                <td>description</td>
                <td>Is Done</td>
                <td>Target Date</td>
              </tr>
            </thead>
  
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  export default ListToDoComponent