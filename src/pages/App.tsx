import { Table } from "./components/table";

import { useAppState } from "./useAppState";

import { AppStyled as Styled } from "./app.styled";

const App = () => {
  const { loading, students, loader, handleSearch, query } = useAppState();
  return (
    <Styled.Container>
      <h1>Main Page</h1>
      <input placeholder="search" onChange={handleSearch} value={query} />
      {students && (
        <Table students={students} loader={loader} loading={loading} />
      )}
    </Styled.Container>
  );
};

export default App;
