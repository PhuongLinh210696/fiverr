import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userService } from '../../Services/userService';
import { getData } from '../../Utils/localStore';
export const getAllUsers = createAsyncThunk('users/getAllUsers',
    async () => {
        const res = await userService.getUsers();
        //return về giá trị muốn store lưu trữ
        return res.data.content
    })

// export const updateTow = createAsyncThunk('typeOfWorks/updateTow',
//     async ({ id, updateToW }) => {
//         const res = await towService.updateTow(updateToW, id);
//         //return về giá trị muốn store lưu trữ
//         return res.data.content
//     })

const initialState = {
    hoTen: getData('user'),
    //luu trữ các người dùng call từ api 
    users: [],
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            if (state.hoTen == null) {
                state.hoTen = action.payload;
            }
        },
        updateUsers: (state, action) => {
            const updatedUsers = action.payload;
            const towIndex = state.tows.findIndex(tow => tow.id === updatedUsers.id);
            if (towIndex !== -1) {
                state.tows[towIndex] = updatedUsers;
            }
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            //thuộc tính payload sẽ chứa các giá trị được trả về từ hàm chạy creatAsyncThunk
            console.log(state);
            console.log(action);
            state.users = action.payload;
        });
        // builder.addCase(updateTow.fulfilled,(state,action) => { 
        //     const updatedToW = action.payload;
        //     const towIndex = state.tows.findIndex(tow => tow.id === updatedToW.id);
        //     if (towIndex !== -1) {
        //         state.tows[towIndex] = updatedToW;
        //     }
        //  })
    }
})

export const { setUsers,updateUsers } = userSlice.actions;
export default userSlice.reducer;