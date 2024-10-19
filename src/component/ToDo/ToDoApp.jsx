import "./ToDoApp.css";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import ListToDoComponent from "./ListToDoComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default function ToDoApp() {
  return (
    <div className="ToDoApp">
      {/* Configuring browser router with Routes 
            need to import that and also install 
            react-router-dom before starting this*/}

      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route
            path="/welcome/:userName"
            element={<WelcomeComponent />}
          ></Route>
          <Route path="/todos" element={<ListToDoComponent />}></Route>
          <Route path="*" element={<ErrorComponent />}></Route>
          <Route path="/logout" element={<LogoutComponent />}></Route>
        </Routes>
        {/* <FooterComponent /> */}
      </BrowserRouter>
    </div>
  );
}













