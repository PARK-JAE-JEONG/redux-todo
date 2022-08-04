import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Detail from '../components/detail/Detail'


const DetailPage = () => {
  
  const param = useParams()
  const todos = useSelector((state) => state.todos.todos)

  return (

      <>
        {
        todos.map((todo) => {
         if (todo.id === param.id) {
          return(
          <Detail 
                key={param.id}
                todo={todo}
              >
          </Detail>)}
          })}
      </>
  )
};

export default DetailPage