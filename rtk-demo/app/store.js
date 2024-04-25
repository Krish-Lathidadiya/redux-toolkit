const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit');
const reduxLogger = require('redux-logger');
const cakeReducer = require('../features/cake/cakeSlice');
const icecreamReducer = require('../features/icecream/icecreamSlice');
const userSlice=require('../features/user/userSlice');

const logger = reduxLogger.createLogger();

// Configure store using combine reducers
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user:userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) // Use getDefaultMiddleware as a function
});

module.exports = store;
