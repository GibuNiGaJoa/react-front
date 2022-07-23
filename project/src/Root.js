import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddlerware,
    reduxThunk
  )(createStore);

const Root = () => (
    <React.StrictMode>
        <Provider store={createStoreWithMiddleware(
            //리듀서를 생성 후 넣어준다
            rootReducer,
            //개발자 도구를 사용하기 위한 설정
            window.__REDUX_DEVTOOLS_EXTENSION__&&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

export default Root;