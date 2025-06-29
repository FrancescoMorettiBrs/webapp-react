import { Route, Routes, BrowserRouter } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import SingleMovie from "./pages/SingleMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<SingleMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
