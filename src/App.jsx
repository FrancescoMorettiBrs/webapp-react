import { Route, Routes, BrowserRouter } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import SingleMovie from "./pages/SingleMovie";
import NotFound from "./pages/NotFound";
import CreateMovie from "./pages/CreateMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies">
              <Route path="" element={<Movies />} />
              <Route path=":slug" element={<SingleMovie />} />
              <Route path="create" element={<CreateMovie />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
