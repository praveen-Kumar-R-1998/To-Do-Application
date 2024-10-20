import { AuthContext } from "./Security/AuthContext";
import { useContext } from "react";

function FooterComponent() {

  const authContext = useContext(AuthContext);
  console.log(`Footer Component ----> ${authContext.number}`)
    return (
      <footer className="footer">
        <div className="container">Your Footer</div>
      </footer>
    );
  }

  export default FooterComponent