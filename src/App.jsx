import { useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((resp) => {
      console.log(resp);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
