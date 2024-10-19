import { Link,useParams } from "react-router-dom";

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
  export default WelcomeComponent