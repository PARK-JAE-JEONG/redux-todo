import React from "react";
import Header from '../components/header/Header'
import Form from '../components/form/Form'
import List from '../components/list/List'
import styled from "styled-components";

const TodoList = () => {

  return (
    <Container>
      <Header />
      <Form />
      <List />
    </Container>
  )
}

export default TodoList;


const Container = styled.div`
display: block;
  
margin: 0px auto;

max-width: 1200px;
min-width: 800px;
`
