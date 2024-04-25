const createSlice=require('@reduxjs/toolkit').createSlice


const initialState={
    numberOfCake:10
}
//slice automatically create action creators based on the reducers
const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        //we don't need explicitly write return
        ordered:(state)=>{
            state.numberOfCake--
        },
        restocked:(state,action)=>{
            state.numberOfCake+=action.payload
        }
    }
})

module.exports=cakeSlice.reducer
module.exports.cakeActions=cakeSlice.actions