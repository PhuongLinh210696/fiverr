import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import TypeOfWorks from "./Pages/TypeOfWorks/TypeOfWorks"
import UserTemplate from "./Templates/UserTemplate";
import AdminTemplate from "./Templates/AdminTemplate"
import SignInAdmin from "./Pages/SignInAdmin/SignInAdmin";
import Services from "./Pages/Services/Services";
import Categories from "./Components/Categories/Categories";
import ListWork from "./Components/ListWork/ListWork";
import DetailWork from "./Components/DetailWork/DetailWork";
import UserProfileWork from "./Components/UserProfileWork/UserProfileWork";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate/>}>
          <Route index element={<HomePage/>}/>
          <Route path="Categories/:id" element={<Categories/>}/>
          <Route path="ListWork/:id" element={<ListWork/>}/>
          <Route path="DetailWork/:id" element={<DetailWork/>}/>
          <Route path="UserProfileWork/:id" element={<UserProfileWork/>}/>
        </Route>
        <Route path="/admin" element={<AdminTemplate/>}>
            <Route path="typeofworks" element={<TypeOfWorks/>}/>
            <Route path="services" element={<Services/>}/>
        </Route>
        <Route path="/admin-signin" element={<SignInAdmin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
