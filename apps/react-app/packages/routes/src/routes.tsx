import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/">
                <h1>Test</h1>
            </Route>
        </BrowserRouter>
    );
};
