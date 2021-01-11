import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeScreen from "screens/HomeScreen/HomeScreen";
import HistoryScreen from "screens/HistoryScreen/HistoryScreen";
import { Message } from "constants/types/Message";
import { fetchTodos } from "store/todo/todoActions";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useTranslation } from "react-i18next";

const RootNavigator = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const alert = useAlert();
  const errorLink = () => <div>{t("page-doesnt-exists")}</div>;

  const showAlert = (message: string, typeMessage: Message) => {
    switch (typeMessage) {
      case "SUCCESS":
        alert.success(t(message));
        break;
      case "SHOW":
        alert.show(message);
        break;
      case "ERROR":
        alert.error(message);
        break;
    }
  };

  useEffect(() => {
    dispatch(fetchTodos(showAlert));
  }, [dispatch]);

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
