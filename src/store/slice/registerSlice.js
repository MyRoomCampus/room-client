import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { reqRegister } from "../../api/register";

const initialState = {
    username:'',
    password:'',
    passwordConfirm:''

};
export const asyncRegister = createAsyncThunk("register",async (user) => {
    const {username,password,passwordConfirm} = user
    console.log(username,password,passwordConfirm)
    if(!username) {
        alert('用户名必须指定!')
        throw new Error('用户名必须指定')
      } else if(password!==passwordConfirm) {
        alert('2次密码要一致!')
        throw new Error('2次密码要一致')
      }else{
        console.log('@@registerSlice_user',user)
        const response = await reqRegister(user);
        console.log('@@registerSlice',response)
        return response.data
      }
    
})

const registerSlice = createSlice({
    name:'register',
    initialState,
    reducers:{},
    extraReducers: {
        [asyncRegister.pending]: () => {
          console.log("Pending!");
        },
        [asyncRegister.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          alert('注册成功！');          
          return { ...state, redirectTo: '/login' };
        },
        [asyncRegister.rejected]: () => {
          console.log("Rejected!");
        },
      },
});
// export const { changeEnterLoading } = registerSlice.actions;
export default registerSlice.reducer;
