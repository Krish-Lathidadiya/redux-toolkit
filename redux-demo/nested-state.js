const redux = require('redux');
const produce=require('immer').produce
const createStore = redux.createStore;

const initialState = {
    name: "krish",
    address: {
        street: "123 main St",
        city: "bostan",
        state: "MA",
    },
};

const STREET_UPDATE = "STREET_UPDATE";

function updateStreet(street) {
    return {
        type: STREET_UPDATE,
        payload: street,
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATE:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload,
            //     },
            // };
            return produce(state,(draft)=>{
                draft.address.street = action.payload
            })
        default:
            return state;
    }
};

const store = createStore(reducer);

console.log("Initial state:", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Updated state:", store.getState());
});

store.dispatch(updateStreet("234 main street"));

unsubscribe();
