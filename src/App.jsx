import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((resp) => {
      console.log(resp);
    });
  }, []);

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
