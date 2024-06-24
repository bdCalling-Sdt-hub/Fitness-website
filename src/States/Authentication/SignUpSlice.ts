import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from '../../AxiosConfig/Config';
const initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    user: {},
};
interface IValue {
    email: string | null,
    password:string | null,
    username: string | null,
    contact: string | null,
    gender: string | null,
}

export const signUp = createAsyncThunk(
    'signUp',
    async (value: IValue, thunkApi) => {
        try {
            const response = await baseURL.post(`/auth/register`, { name: value.username, email: value.email, phone_number: value.contact, password: value.password ,gender:value.gender});
            //console.log(response)
            return response?.data.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }
    }
)
export const signSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(signUp.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.user = action.payload;
            }),
            builder.addCase(signUp.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
                state.user = {}
            })
    }
})
export default signSlice.reducer