import "./App.css";
import { BrowserRouter as Browser, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import InputScoreScreen from "./screens/InputScoreScreen";
import CoursesScreen from "./screens/CoursesScreen";
import ScoresScreen from "./screens/ScoresScreen";

function App() {
  return (
    <div className="App">
      <Browser>
        <Header />
        <Route path="/" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/add-score" component={InputScoreScreen} />
        <Route path="/courses" component={CoursesScreen} />
        <Route path="/scores" component={ScoresScreen} />
      </Browser>
    </div>
  );
}

export default App;
