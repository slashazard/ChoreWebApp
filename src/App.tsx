import React, { useContext } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { KidInfo } from "./components/kid-info";
import { ChoreNav } from "./components/chore-nav";
import { ChoreHome } from "./components/chore-home";
import { KidChoreDataContext } from "./contexts";

function App() {
  const KCData = useContext(KidChoreDataContext);

  return (
    <div className="App">
      <ChoreNav kids={KCData} />
      <Route exact path={"/"} render={() => <ChoreHome />} />
      {KCData.map((k, i) => {
        return (
          <Route
            key={i}
            exact
            path={"/" + k.name}
            render={() => <KidInfo kid={k} />}
          />
        );
      })}
    </div>
  );
}
export default App;
