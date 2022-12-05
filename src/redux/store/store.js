import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../reducer';

const store = configureStore({reducer:rootReducer});

export default store;


// import { configureStore } from "@reduxjs/toolkit"
// import thunk from "redux-thunk";
// import rootReducer from "../reducer";

// const store = configureStore({reducer: rootReducer});

// export default store;

// import { configureStore } from "@reduxjs/toolkit";

// import rootReducer from "./reducers";

// export default configureStore({ reducer: rootReducer });
