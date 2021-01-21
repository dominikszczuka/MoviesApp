import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeScreen from "screens/HomeScreen/HomeScreen";
import HistoryScreen from "screens/HistoryScreen/HistoryScreen";
import { Message } from "constants/types/Message";
import { getTodosFromLocalStorage, fetchTodos } from "store/todo/todoActions";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useTranslation } from "react-i18next";
import { checkIfDateExists } from "utils/helpers/methodsForStorage";

const RootNavigator = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const alert = useAlert();
  const errorLink = () => <div>{t("page-doesnt-exists")}</div>;
  const allTodos = checkIfDateExists();

  const showAlert = (message: string, typeMessage: Message) => {
    switch (typeMessage) {
      case "success":
        alert.success(t(message));
        break;
      case "show":
        alert.show(message);
        break;
      case "error":
        alert.error(message);
        break;
    }
  };

  useEffect(() => {
    if (allTodos) {
      dispatch(getTodosFromLocalStorage(allTodos.todos, allTodos.todosDone));
    } else {
      dispatch(fetchTodos(showAlert));
    }
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
