import { createStore } from "redux";
import rootReducer from "store/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
