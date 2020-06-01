import { AsyncStorage } from "react-native";

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import authReducer from "./auth.reducer";

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});
