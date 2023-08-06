import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {serService} from '../../Services/serService';


export const getAllSer = createAsyncThunk('services/getAllSer',
    async () => {
        const res = await serService.getService();
        //return về giá trị muốn store lưu trữ
        return res.data.content
    })



const initialState = {
    //hoTen: getData('user'),
    //luu trữ các người dùng call từ api 
    sers: [],
}

export const serSlice = createSlice({
    name: "services",
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getAllSer.fulfilled, (state, action) => {
            //thuộc tính payload sẽ chứa các giá trị được trả về từ hàm chạy creatAsyncThunk
            console.log(state);
            console.log(action);
            state.sers = action.payload;
        });
        // builder.addCase(updateTow.fulfilled,(state,action) => { 
        //     const updatedToW = action.payload;
        //     const towIndex = state.tows.findIndex(tow => tow.id === updatedToW.id);
        //     if (towIndex !== -1) {
        //         state.tows[towIndex] = updatedToW;
        //     }
        //  })
    }
});

export const { setToW,updateToW } = serSlice.actions;
export default serSlice.reducer;