import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UserTemplate from "./Templates/UserTemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
