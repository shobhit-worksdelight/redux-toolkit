const {createSlice} = require("@reduxjs/toolkit");

const initialState = []

const formSlice = createSlice({
   name: 'form',
   initialState,
   reducers: {

       add(state ,action) {
            state.push(action.payload);
       },
       remove(state,action) {
           state = state.filter(item=> item.id !== action.payload);
       }
   },
})

export const {add,remove} = formSlice.actions;
export default formSlice.reducer;