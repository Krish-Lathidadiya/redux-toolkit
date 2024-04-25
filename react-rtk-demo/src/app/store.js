import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger'; 
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/iceCreamSlice';
import userReducer from '../features/user/userSlice';

const logger = createLogger(); 

// Configure store using combine reducers
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
