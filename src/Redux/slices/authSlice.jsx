import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../../Utils/localStore';


const initialState = {
    userName: getData('user'),
    //luu trữ các người dùng call từ api 
    users: [],
  }

  export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        //ở đây tạo 1 phương thức giúp xử lý bên trên store redux
        setDataName : (state,action) =>{
            console.log("abc")
            //Check xem có dữ liệu hay không, nếu không có set dữ liệu cho nó
            if(state.userName == null){
                state.userName = action.payload;
            }
        }
    },
  })



  export const { setDataName} = authSlice.actions;
  export default authSlice.reducer;