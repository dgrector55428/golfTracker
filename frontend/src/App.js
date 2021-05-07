import "./App.css";
import { BrowserRouter as Browser, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import InputScoreScreen from "./screens/InputScoreScreen";

function App() {
  return (
    <div className="App">
      <Browser>
        <Header />
        <Route path="/" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/add-score" component={InputScoreScreen} />
      </Browser>
    </div>
  );
}

export default App;
