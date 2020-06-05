import { createStore, applyMiddleware } from 'redux';
//import counterReducer from '../features/counter/counterSlice';
import reducer from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// export default configureStore({
//   // reducer: {
//   //   counter: counterReducer,
//   // },
//   reducer: reducer,
//   composeWithDevTools()
// });

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))