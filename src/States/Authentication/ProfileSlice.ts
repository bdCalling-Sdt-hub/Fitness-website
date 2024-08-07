import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from '../../AxiosConfig/Config';
const initialState = {
    error: false,
    success: false,
    loading: true,
    isSuccess: false,
    user: {},
};

export const Profile = createAsyncThunk(
    'Profile',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/auth/profile`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }
    }
)
export const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(Profile.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(Profile.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.user = action.payload;
            }),
            builder.addCase(Profile.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
                state.user = {}
            })
    }
})
export default ProfileSlice.reducer