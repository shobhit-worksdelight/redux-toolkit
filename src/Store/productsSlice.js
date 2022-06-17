const { createSlice } = require("@reduxjs/toolkit");

const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
})

const productsSlice = createSlice({
  name: "products",

  initialState: {
      data:[],
      status:STATUSES.IDLE,
  },

  reducers: {
    setProducts(state, action) {
    
      // do not do this naver
      // const res = await fetch("https://fakestoreapi.com/products");
      state.data = action.payload;
    },
    setStatus(state,action)   {
      state.status = action.payload;
    }
     
  },
});

export const {setProducts,setStatus} = productsSlice.actions;
export default productsSlice.reducer;


// thunk middleware for
export function fetchProducts(){
  return async function fetchProductThunk(dispatch,getState){
    dispatch(setStatus(STATUSES.LOADING))
     try{
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data))
      dispatch(setStatus(STATUSES.IDLE))
     }
     catch(err){
       console.log(err);
       dispatch(setStatus(STATUSES.ERROR))
     }
  }
}

