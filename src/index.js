import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
// =========================
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddelware from "redux-thunk";
import { createLogger } from "redux-logger";
// =========================
import { 
	searchRobotsReducer, 
	requestRobotsReducer } from "./reducers";

import App from "./containers/App";

const logger = createLogger();
const rootReducer = combineReducers({
	searchRobotsReducer,
	requestRobotsReducer,
});
const store = createStore(rootReducer, 
	applyMiddleware(thunkMiddelware, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
