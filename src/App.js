import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/MainContent/MainContent";
import ShowStories from "./Components/ShowStories/ShowStories";
import Home from "./Components/Home/Home";

import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/:type" render={(props) => <ShowStories {...props} />} />
          {/* <Route path="/:past" render={(props) => <ShowStories {...props} />} /> */}
        </Switch>
      </MainContent>
      <Footer />
    </div>
  );
}
