import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeScreen from "screens/HomeScreen/HomeScreen";
import HistoryScreen from "screens/HistoryScreen/HistoryScreen";

export const errorLink = () => <div>Sorry, this page does not exists</div>;

const RootNavigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/history" component={HistoryScreen} />
        <Route component={errorLink} />
      </Switch>
    </Router>
  );
};

export default RootNavigator;
