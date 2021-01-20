import React from "react";
import { Provider } from "react-redux";
import RootNavigator from "navigation/RootNavigator/RootNavigator";
import store from "store/store";

function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
