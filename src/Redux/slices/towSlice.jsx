import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { towService } from '../../Services/towService';

export const getAllTow = createAsyncThunk('typeOfWorks/getAllTow',
    async () => {
        const res = await towService.getToW();
        //return về giá trị muốn store lưu trữ
        return res.data.content
    })

export const updateTow = createAsyncThunk('typeOfWorks/updateTow',
    async ({ updateToW,id}) => {
        const res = await towService.updateTow(updateToW, id);
        //return về giá trị muốn store lưu trữ
        return res.data.content
    })

const initialState = {
    //hoTen: getData('user'),
    //luu trữ các người dùng call từ api 
    tows: [],
}

export const towSlice = createSlice({
    name: "typeOfWorks",
    initialState,
    reducers: {
        setToW: (state, action) => {
            state.tows = action.payload;
        },
        updateToW: (state, action) => {
            const updatedToW = action.payload;
            const towIndex = state.tows.findIndex(tow => tow.id === updatedToW.id);
            if (towIndex !== -1) {
                state.tows[towIndex] = updatedToW;
            }
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getAllTow.fulfilled, (state, action) => {
            //thuộc tính payload sẽ chứa các giá trị được trả về từ hàm chạy creatAsyncThunk
            console.log(state);
            console.log(action);
            state.tows = action.payload;
        });
        builder.addCase(updateTow.fulfilled,(state,action) => { 
            const updatedToW = action.payload;
            const towIndex = state.tows.findIndex(tow => tow.id == updatedToW.id);
            if (towIndex !== -1) {
                state.tows[towIndex] = updatedToW;
            }
         })
    }
})

export const { setToW,updateToW } = towSlice.actions;
export default towSlice.reducer;