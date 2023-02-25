import { Table } from "./components/table";

import { useAppState } from "./useAppState";

import { AppStyled as Styled } from "./app.styled";

const App = () => {
  const { loading, students, loader } = useAppState();

  return (
    <Styled.Container>
      <h1>Main Page</h1>
      {students && (
        <Table students={students} loader={loader} loading={loading} />
      )}
    </Styled.Container>
  );
};

export default App;
