import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    SingleBlog: {
        _id: string,
        created_by: string,
        topic: string,
        title: string,
        description: string,
        images:string[],
        createdAt: string,
        updatedAt: string,
        __v: 0,
        id: string,
        youtubeUrl:string | null | undefined,
    } | null | undefined
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    SingleBlog: null,
};
interface Permitter {
    id: string | null | undefined,
}
export const GetSingleBlog = createAsyncThunk(
    'GetSingleBlog',
    async (value :Permitter, thunkApi) => {
        try {
            const response = await baseURL.get(`/blog/single/${value.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            console.log(response)
            return response?.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }
    }
)
export const GetSingleBlogSlice = createSlice({
    name: 'GetSingleBlog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetSingleBlog.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(GetSingleBlog.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.SingleBlog = action.payload.data;
            }),
            builder.addCase(GetSingleBlog.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.SingleBlog = null
            })
    }
})
export default GetSingleBlogSlice.reducer