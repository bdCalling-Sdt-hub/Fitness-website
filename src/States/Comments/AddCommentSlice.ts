import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
};
interface Permitter {
    comment: string,
    classId: string | undefined,
}
export const AddComment = createAsyncThunk(
    'AddComment',
    async (value: Permitter, thunkApi) => {
        try {
            const response = await baseURL.post(`/comment/add/`, { ...value }, {
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
export const AddCommentSlice = createSlice({
    name: 'AddComment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AddComment.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(AddComment.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
            }),
            builder.addCase(AddComment.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
            })
    }
})
export default AddCommentSlice.reducer