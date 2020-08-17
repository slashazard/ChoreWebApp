import React, { useContext } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { KidInfo } from "./components/kid-info";
import { ChoreNav } from "./components/chore-nav";
import { KidChoreDataContext } from "./contexts";

function App() {
  const KCData = useContext(KidChoreDataContext);

  return (
    <div className="App">
      <ChoreNav kids={KCData} />
      {KCData.map((k) => {
        return (
          <Route
            key={k.name}
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
