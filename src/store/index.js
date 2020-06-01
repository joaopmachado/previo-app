import { createStore } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./reducers";

let store = createStore(rootReducer);
let persistor = persistStore(store);

export default { store, persistor };
