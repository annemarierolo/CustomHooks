import { useEffect } from "react";
import { useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {

    const initialState = [];
      
      //Esto es para indicar como se inicializa el elemento
      //Para que los datos sean persistentes en el local Storage
      const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
      }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  //Esto es para almacenar los datos en el local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  
    const handleAddTodo = (todo) => {
      const action = {
        type: 'Add Todo',
        payload: todo
      }

      dispatch(action);
    }

    const handleDeleteTodo = (id) => {
      dispatch({
        type: 'Remove Todo',
        payload: id
      })
    }

    const handleToggleTodo = (id) => {
      dispatch({
        type: 'Done Todo',
        payload: id
      })
    }

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter(todo => !todo.done).length;


  return {
    todos,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount

  }
}
