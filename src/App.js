//Router
import { HashRouter, Route, Routes } from "react-router-dom";
//Pages
import About from "./pages/about";
import Users from "./pages/users";
import FormPage from "./pages/formpage";

//Layouts
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
export default App;
