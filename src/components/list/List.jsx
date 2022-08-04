import { useSelector } from "react-redux"; 

import styled from "styled-components";
import Todo from '../todo/Todo';

const List = () => {

  const todos = useSelector((state) => state.todos.todos)

  return (

    <ListContainer>
      <ListTitle >Working.. 🔥</ListTitle>
      <StTodoList>
        {
        todos.map((todo) => {
         if (todo.isDone !== true) {
          return(
          <Todo 
                key={todo.id}
                todo={todo} 
              >
              </Todo>)}
          })}
      </StTodoList>
      <ListTitle>Done..! 🎉</ListTitle>
      <StTodoList>
      {
        todos.map((todo) => {
         if (todo.isDone === true) {
          return(
          <Todo 
                key={todo.id}
                todo={todo} 
              >
              </Todo>)}
          })}
      </StTodoList>
    </ListContainer>
  )
};

export default List


const ListContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0px 25px 0px 25px;
`
const ListTitle = styled.h2`

  align-self: start;
`
const StTodoList = styled.div`
 
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 100%;
  
  gap: 20px;`
