import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { wService } from '../../Services/wService';

export const getAllWMenu = createAsyncThunk('works/getAllWMenu',
    async () => {
        const res = await wService.getWMenu();
        //return về giá trị muốn store lưu trữ
        return res.data.content
    })

const initialState = {
  ws: [],
};

const wSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getAllWMenu.fulfilled, (state, action) => {
        //thuộc tính payload sẽ chứa các giá trị được trả về từ hàm chạy creatAsyncThunk
        console.log(state);
        console.log(action);
        state.ws = action.payload;
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

export const { setCategories } = wSlice.actions;
export default wSlice.reducer;
