import { useEffect } from "react";

import { loadStudents } from "@/redux/student/studentReducer";
import { useTypedDispatch, useTypedSelector } from "@/redux/hooks";

import { Table } from "./components/table";

import { AppStyled as Styled } from "./app.styled";

const App = () => {
  const dispatch = useTypedDispatch();

  const { students, loading } = useTypedSelector(
    (state) => state.studentReducer
  );

  useEffect(() => {
    dispatch(loadStudents());
  }, [dispatch]);

  return (
    <Styled.Container>
      <h1>Main Page</h1>
      {students && <Table students={students} />}
    </Styled.Container>
  );
};

export default App;
