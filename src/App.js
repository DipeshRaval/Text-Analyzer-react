import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import FormText from "./components/FormText";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setmodeText] = useState("Enable To Dark Mode");
  const [alert, setalert] = useState(null);

  const showAlert = (type, msg) => {
    setalert({
      type: type,
      message: msg,
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setmodeText("Enable light Mode");
      showAlert("success", "Dark mode Enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setmodeText("Enable Dark Mode");
      showAlert("success", "Light mode Enabled");
    }
  };

  return (
    // <Router>
    <>
      <Navbar mode={mode} modeText={modeText} toggleMode={toggleMode} />
      <Alert alert={alert} showAlert={showAlert} />
      {/* <Switch>
          <Route path="/about">
            <About
              title="About Us"
              mode={mode}
              toggleMode={toggleMode}
              modeText={modeText}
            />
          </Route> */}

      {/* <Route path="/"> */}
      <FormText
        mode={mode}
        title="Welcome Our Text Analyzer"
        toggleMode={toggleMode}
        showAlert={showAlert}
      />
      {/* </Route> */}
      {/* </Switch> */}
    </>
    // </Router>
  );
}

export default App;
