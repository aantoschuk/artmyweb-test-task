import { useEffect } from "react";

import { loadStudents } from "@/redux/student/studentReducer";
import { useTypedDispatch, useTypedSelector } from "@/redux/hooks";

const App = () => {
  const dispatch = useTypedDispatch();

  const { students, loading } = useTypedSelector(
    (state) => state.studentReducer
  );

  useEffect(() => {
    dispatch(loadStudents());
  }, [dispatch]);

  return (
    <div>
      <h1>Main Page</h1>
      {students &&
        students.map((student) => <p key={student.name}>{student.name}</p>)}
      {loading && <h1>Loading...</h1>}
    </div>
  );
};

export default App;
