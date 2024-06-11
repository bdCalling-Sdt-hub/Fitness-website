import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    commentData: {
        _id: string,
        userId: {
            profile_image: string,
            _id: string,
            email: string,
            id: string,
        },
        classId: string,
        comment: string,
        reply: {
            reply: string,
            adminId: {
                _id: string,
                email: string,
                id: string,
            },
            _id: string,
            createdAt: string,
            updatedAt: string,
            id: string,
        }[],
        createdAt: string,
        updatedAt: string,
        __v: 1,
        id: string,
    }[],
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    commentData: []
};
interface Permitter {
    classId: string | undefined,
    limit:number ,
}
export const GetAllComment = createAsyncThunk(
    'GetAllComment',
    async (value: Permitter, thunkApi) => {
        try {
            const response = await baseURL.get(`/comment/get/${value.classId}?limit=${value?.limit}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            console.log(response)
            return response?.data.data;
        } catch (error) {
            console.log(error)
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }
    }
)
export const GetAllCommentSlice = createSlice({
    name: 'GetAllComment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetAllComment.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(GetAllComment.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.commentData = action.payload;
            }),
            builder.addCase(GetAllComment.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.commentData = []
            })
    }
})
export default GetAllCommentSlice.reducer