import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../../redux/modules/todos'
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Todo = ({ todo }) => {

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const onClickDeleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  }
  const onClickToggleHandler = () => {
    dispatch(toggleTodo(todo.id, todo.isDone));
  }

  return (
      <TodoBox>
        <DetailBtn type='text' onClick={()=> navigate(`/detail/${todo.id}`)}>상세보기</DetailBtn>
        <div>
          <TodoTitle>{todo.title}</TodoTitle>
          <TodoContent>{todo.content}</TodoContent>
        </div>
        <TodoBtn>
          <TodoDelete 
          onClick={onClickDeleteHandler}
          >삭제하기
          </TodoDelete>
          {
            ! todo.isDone 
            ? (<TodoComplete onClick={onClickToggleHandler}>완료</TodoComplete>)
            : (<TodoComplete onClick={onClickToggleHandler}>취소</TodoComplete>)
          }
        </TodoBtn>
      </TodoBox>
  )
};

export default Todo

const TodoBox = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 320px;

  border-style: solid;
  border-width: 5px;
  border-radius: 15px;
  border-color: darkcyan;

  padding: 10px 5px 5px 5px ;
`
const TodoTitle = styled.h2`

  margin-left: 20px;
  
  width: 280px;

  max-height: 28px;
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`
const TodoContent = styled.p`

  margin-left: 20px;
  
  width: 280px;

  max-height: 28px;
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const TodoBtn = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  gap: 5px;

  width: 90%;
  height: 40px;

  margin: 10px auto 20px;
`
const TodoComplete = styled.button`

  border: 3px solid green;
  border-radius: 8px;

  width: 45%;

  background-color: #fff;

  cursor: pointer;
`
const TodoDelete = styled.button`

  border: 3px solid red;
  border-radius: 8px;

  width: 45%;

  background-color: #fff;

  cursor: pointer;
`
const DetailBtn = styled.button`

  margin: 10px 0 0 20px;
  padding:0;

  font-size:14px;
  font-weight:bold;
  color:blue;
  text-decoration:underline;

  border: none;

  background-color: white;
  
  cursor: pointer;
`