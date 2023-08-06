import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import TypeOfWorks from "./Pages/TypeOfWorks/TypeOfWorks"
import UserTemplate from "./Templates/UserTemplate";
import AdminTemplate from "./Templates/AdminTemplate"
import SignInAdmin from "./Pages/SignInAdmin/SignInAdmin";
import Services from "./Pages/Services/Services";
import Users from "./Pages/Users/Users";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/admin" element={<AdminTemplate />}>
          <Route path="users" element={<Users />} />
          <Route path="typeofworks" element={<TypeOfWorks />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="/admin-signin" element={<SignInAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
