import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    AllBlog: {
        _id: string,
        title: string,
        image: string,
        createdAt: string,
        updatedAt: string,
        __v: number,
        id: string,
    }[]
    meta: {
        page: number,
        limit: number,
        total: number,
        totalPage: number,
    } | null
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    AllBlog: [],
    meta: null

};

export const GetAllBlog = createAsyncThunk(
    'GetAllBlog',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/blog/get-all`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            // console.log(response)
            return response?.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }
    }
)
export const GetAllBlogSlice = createSlice({
    name: 'GetAllBlog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetAllBlog.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(GetAllBlog.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.AllBlog = action.payload.data;
                state.meta = action.payload.meta;
            }),
            builder.addCase(GetAllBlog.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.AllBlog = []
                state.meta = null
            })
    }
})
export default GetAllBlogSlice.reducer