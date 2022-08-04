const ADD_TODO = "app/todos/ADD_TODO";
const TOGGLE_TODO = "app/todos/TOGGLE_TODO";
const DELETE_TODO = "app/todos/DELETE_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    todoId,
  };
};
export const toggleTodo = (todoId, isDone) => {
  return {
    type: TOGGLE_TODO,
    todoId,
    isDone,
  };
};

const initialState = {
  todos:[],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
        };
        
    case DELETE_TODO:
      console.log(action)
      return {
        todos: state.todos.filter(todo => (
        todo.id !== action.todoId &&
          [...state.todos, action.todo]
        ))
      }

    case TOGGLE_TODO:

      return {
        todos: state.todos.map((todo) => todo.id === action.todoId
        ? {...todo, isDone: !todo.isDone}
        : todo)
      }

    default:
      return state;
  }
};

export default todos;