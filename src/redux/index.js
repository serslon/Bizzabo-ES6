import restMiddlewareCreator from 'redux-fetch-middleware';
import { applyMiddleware, combineReducers } from 'redux'

import artist from './artist'
import event from './event'
import favorite from './favorites'
import information from './information'

const globalRestOptions = {
    // suffix: ['REQUEST', 'SUCCESS', 'FAILURE'],
    // if `debug` is true, then in reducer `action.meta.$requestOptions`
    debug: false,
    // Set global value by `responseType`. Available values: json, text, formData, blob, arrayBuffer (fetch methods). Default: json
    responseType: 'json',
    // Example config
    fetchOptions: {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
};

const restMiddleware = restMiddlewareCreator(globalRestOptions);

const middleware = [restMiddleware];

export const Reducer = combineReducers({
    artist,
    event,
    favorite,
    information
})

export const Middleware = applyMiddleware(...middleware)
