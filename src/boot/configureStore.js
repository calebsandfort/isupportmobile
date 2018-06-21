// @flow
// import {AsyncStorage} from 'react-native';
//import createSecureStore from "redux-persist-expo-securestore";
import { composeWithDevTools } from "redux-devtools-extension";
// import { composeWithDevTools } from "remote-redux-devtools";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
//import {persistStore, autoRehydrate} from 'redux-persist';
import reducer from "../redux/modules";
import {install} from "redux-loop";

//const storage = createSecureStore();

export default function configureStore(onCompletion : () => void): any {
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk
  ];

  // const persistConfig = {
  //   storage: AsyncStorage,
  //   whitelist: ['userManagement']
  // };

  const enhancer = composeWithDevTools(applyMiddleware(...middlewares),
    // autoRehydrate(),
    install()
  );
  const store = createStore(reducer, enhancer);
  // console.log("start hyrdate");
  //
  // persistStore(store, persistConfig, () => {
  //   console.log("call onCompletion()");
  //   onCompletion();
  // });

  return store;
}
