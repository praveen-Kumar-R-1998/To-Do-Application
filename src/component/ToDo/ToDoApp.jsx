import { useState } from "react";
import "./ToDoApp.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
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
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

function LoginComponent() {
  const [userName, setUsername] = useState("Praveen");
  const [password, setPassword] = useState("");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

  function handleUserNameChange(event) {
    // console.log(event);
    // console.log(event.target.value);
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    // console.log(event);
    // console.log(event.target.value);
    setPassword(event.target.value);
  }

  function handleSubmit() {
    // console.log(userName)
    // console.log(password)
    if (userName === "Praveen" && password === "abcd") {
      console.log("Success");
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${userName}`);
    } else {
      console.log("Failed");
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  // function SuccessMessageComponent(){
  //     if(showSuccessMessage){
  //     return <div className="successMessage">User Authentication Successfull!!!</div>
  //     }
  //     return null
  // }

  // function ErrorMessageComponent(){
  //     if(showErrorMessage){
  //     return <div className="errorMessage">User Authentication Failed. Please check your credentials.</div>
  //     }
  //     return null
  // }

  return (
    <div className="Login">
      {/* Show <div>....</div> if condition one is true (showSuccessMessage)*/}
      {showSuccessMessage && (
        <div className="successMessage">User Authentication Successfull!!!</div>
      )}
      {showErrorMessage && (
        <div className="errorMessage">
          User Authentication Failed. Please check your credentials.
        </div>
      )}
      <div className="LoginForm">
        <h1>Time To Login.</h1>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={handleUserNameChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div>
          <button type="button" name="Login" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  // const params = useParams();
  // console.log(params.userName)  or another method

  const { userName } = useParams();
  console.log(userName);
  return (
    <div>
      <h1>Welcome to ToDo Application</h1>
      <div className="WelcomeComponent">Welcome {userName}</div>
      <div>
        Manage Your todos. <Link to="/todos">Go Here</Link>
      </div>
    </div>
  );
}

function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>Page Not Found</h1>
      <div>
        It seems the page you're looking for doesn't exist. Please check the URL
        or
        <a href="/"> return to the homepage</a>.
      </div>
    </div>
  );
}

function ListToDoComponent() {
  const todayDate = new Date();
  const completionDate = new Date(
    todayDate.getFullYear() + 12,
    todayDate.getMonth(),
    todayDate.getDay()
  );

  const todos = [
    {
      id: 1,
      description: "Learn AWS",
      done: false,
      targetDate: completionDate,
    },
    {
      id: 2,
      description: "Learn Azure",
      done: false,
      targetDate: completionDate,
    },
    { id: 3, description: "Learn GC", done: false, targetDate: completionDate },
  ];
  return (
    <div className="container">
      <h1>Things U Want To Do!</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>description</td>
              <td>Is Done</td>
              <td>Target Date</td>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function HeaderComponent() {
  return (
    <header className="header">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/praveen-Kumar-R-1998"
            >
              Developers profile
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/welcome/Praveen">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/todos">
              ToDo's
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>

    // <header className="border-bottom border-light border-5 mb-5 p-2">
    //         <div className="container">
    //             <div className="row">
    //                 <nav className="navbar navbar-expand-lg">
    //                     <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://github.com/praveen-Kumar-R-1998">Profile</a>
    //                     <div className="collapse navbar-collapse">
    //                         <ul className="navbar-nav">
    //                             <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/Praveen">Home</Link></li>
    //                             <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
    //                         </ul>
    //                     </div>
    //                     <ul className="navbar-nav">
    //                         <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
    //                         <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
    //                     </ul>
    //                 </nav>
    //             </div>
    //         </div>
    //     </header>
  );
}

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="container">Your Footer</div>
    </footer>
  );
}

function LogoutComponent() {
  return (
    <div className="LogoutComponent">
      <h1>Logout Successfull!!!</h1>
      <div>Thank You For Using Our Application!!!</div>
    </div>
  );
}
