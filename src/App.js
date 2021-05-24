import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/MainContent/MainContent";
import ShowStories from "./Components/ShowStories/ShowStories";

import { Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/top" />} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!["top", "new", "best"].includes(type)) {
                return <Redirect to="/" />;
              }
              return <ShowStories type={type} />;
            }}
          />
          {/* <Route path="/:past" render={(props) => <ShowStories {...props} />} /> */}
        </Switch>
      </MainContent>
      <Footer />
    </div>
  );
}
