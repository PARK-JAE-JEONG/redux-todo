import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";

import uuid from "react-uuid";
import styled from "styled-components";


const Form = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  const onChangeHandler2 = (e) => {
    const { value } = e.target;
    setContent(value);
  };

  let nextId = uuid()

  const onClickAddTodoHandler = () => {
    if(title !== '' && content !== '') {
    dispatch(addTodo({id:nextId ,title, content, isDone:false}))
    } else {
      alert ('내용을 전부 입력해 주세요!!')
    }
  };  

  const onReset = () => {
    setTitle('') 
    setContent('') 
  };

  return (  
      <FormBox>
        <FormDiv>
          제목
          <FormInput
          type="text" 
          value={title}
          onChange={onChangeHandler}
          />
          내용
          <FormInput 
          type="text"
          value={content} 
          onChange={onChangeHandler2}
          />
        </FormDiv>
        <FormDiv>
          <FormButton
          onClick={() => {onClickAddTodoHandler(); onReset();}}>
            추가하기
          </FormButton>
        </FormDiv>
      </FormBox>
  )
};

export default Form


const FormBox = styled.div`

  background-color: gainsboro;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  height: 100px;

  border-radius: 20px;

  padding: 0px 30px 0px 30px;
`
const FormDiv = styled.div`
  
  display: flex;
  font-display: row;
  align-items: center;

  gap: 20px;
`
const FormInput = styled.input`
  
  width: 250px;
  height: 40px;

  padding-left:10px;

  border: none;
  border-radius: 10px;
`
const FormButton = styled.button`

  width: 150px;
  height: 40px;

  border: none;
  border-radius: 10px;

  font-size: 16px;
  font-weight: bold;
  color: white;

  cursor: pointer;
  
  background-color: darkcyan;
  `
