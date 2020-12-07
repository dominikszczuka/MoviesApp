import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeScreen from "screens/HomeScreen/HomeScreen";
import HistoryScreen from "screens/HistoryScreen/HistoryScreen";

const RootNavigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/history" component={HistoryScreen} />
      </Switch>
    </Router>
  );
};

export default RootNavigator;
