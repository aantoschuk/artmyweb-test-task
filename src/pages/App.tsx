import { useEffect } from "react";

import { instance } from "../api/api";

const App = () => {
  const makeRequest = async () => {
    const response = await instance.get("/students");
    console.log(response.data);
  };

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <div>
      <h1>Main Page</h1>
    </div>
  );
};

export default App;
