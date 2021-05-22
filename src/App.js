import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/MainContent/MainContent";
import ShowStories from "./Components/ShowStories/ShowStories";

import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent>
        <Switch>
          <Route path="/" component={ShowStories} />
          <Route path="/new" component={ShowStories} />
          <Route path="/past" component={ShowStories} />
        </Switch>
      </MainContent>
      <Footer />
    </div>
  );
}
