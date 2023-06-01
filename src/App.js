//Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
import About from "./pages/about";
import Users from "./pages/users";
import Home from "./pages/home";

//Layouts
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
