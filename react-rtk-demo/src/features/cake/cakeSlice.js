import {createSlice} from '@reduxjs/toolkit'

const initialState={
    numberOfCakes:10
}
//slice automatically create action creators based on the reducers
const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        //we don't need explicitly write return
        ordered:(state)=>{
            state.numberOfCakes--
        },
        restocked:(state,action)=>{
            state.numberOfCakes+=action.payload
        }
    }
})

export default cakeSlice.reducer
export const {ordered,restocked}=cakeSlice.actions