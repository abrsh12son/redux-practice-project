'use client'
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store/store';
import App from './components/app';

const MainPage = () => {
    return (
        <>
            <Provider store={store}>
                <App/>
        </Provider>
        </>
    );
}

export default MainPage;
