import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import { Route, Router, BrowserRouter } from "react-router-dom";

const createRoutes = () => (
  <BrowserRouter>
    <Router>
      <Route path="/" element={<App />}></Route>
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Router>
  </BrowserRouter>
);

export default createRoutes;
