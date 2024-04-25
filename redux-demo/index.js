const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger()

const CAKE_ORDER = "CAKE_ORDER";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDER = "ICECREAM_ORDER";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// Action creator functions
function orderCake() {
    return {
        type: CAKE_ORDER,
        quantity: 1,
    };
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        quantity: qty,
    };
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDER,
        quantity: qty,
    };
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        quantity: qty,
    };
}

const initialCakeState = {
    numberOfCakes: 10,
};

const initialIceCreamState = {
    numberOfIceCreams: 20,
};

// Reducers
// (initialState,action)=>newState
//manage it's own state
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDER:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.quantity,
            };
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.quantity,
            };
        default:
            return state;
    }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDER:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - action.quantity,
            };
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + action.quantity,
            };
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});

// Create store
const store = createStore(rootReducer,applyMiddleware(logger));

// Log initial state
console.log("Initial state:", store.getState());

// Subscribe to store updates
const unsubscribe = store.subscribe(() => {
    console.log("Updated state:", store.getState());
});

// Bind action creators
const actions = bindActionCreators(
    { orderCake, restockCake, orderIceCream, restockIceCream },
    store.dispatch
);

// Dispatch actions
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(2);
actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(4);

// Unsubscribe from store updates
unsubscribe();
