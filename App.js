import "../src/App.css";
import Middle from "./Components/Middle";
import logo from "../src/assests/logo.svg";
import { Row } from "react-bootstrap";

function App() {
  return (
    <div className="bg">
      <img
        alt=""
        src={logo}
        width="160"
        height="36"
        className="d-inline-block-align-top"
      />

      <Middle />
      <div className="bottom-layer"> Terms of use | Privacy policy </div>
    </div>
  );
}

export default App;
