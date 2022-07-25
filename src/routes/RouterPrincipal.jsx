import Home from "../components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../components/About";
import Password from "../components/Password";

function RouterPrincipal() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/vite-react-password-generator/"
          element={<Layout />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPrincipal;
