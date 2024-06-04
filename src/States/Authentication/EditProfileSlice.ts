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
    profile_image: File | undefined,
    name: string | null,
    contact: string | null,
    address: string | null,
}
export const EditProfile = createAsyncThunk(
    'EditProfile',
    async (value: IValue, thunkApi) => {
        try {
            console.log({...value})
            const response = await baseURL.patch(`/auth/edit-profile`, {...value}, {
                headers: {
                    "Content-Type": "multipart/form-data",
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
export const EditProfileSlice = createSlice({
    name: 'EditProfile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(EditProfile.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(EditProfile.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.user = action.payload;
            }),
            builder.addCase(EditProfile.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
                state.user = {}
            })
    }
})
export default EditProfileSlice.reducer



// try {
//     const response = await baseURL.post(`/auth/change-password`, { oldPassword: value.oldPassword, newPassword: value.newPassword }, {
//         headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${localStorage.getItem('token')}`,
//         }
//     });
//     return response?.data;
// } catch (error) {
//     const axiosError = error as AxiosError;
//     const message = axiosError?.response?.data;
//     return thunkApi.rejectWithValue(message);
// }
// }