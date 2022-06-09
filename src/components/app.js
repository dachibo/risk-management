import React from 'react';
import {Provider} from "react-redux";
import Calculator from "./calculator";
import store from "../store";


const App = () => {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Calculator/>
            </Provider>
        </React.Fragment>
    );
};

export default App;
