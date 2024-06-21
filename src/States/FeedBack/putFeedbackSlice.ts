import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    Feedback: {}[]
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    Feedback: []
};
interface Parameter {
    text: string | undefined | null
}
export const putFeedBack = createAsyncThunk(
    'putFeedBack',
    async (value: Parameter, thunkApi) => {
        try { 
            const response = await baseURL.post(`/feedback/send`, { ...value },{
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response.data;
        } catch (error) {
            console.log(error)
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }
    }
)

export const putFeedBackSlice = createSlice({
    name: 'putFeedBack',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(putFeedBack.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(putFeedBack.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.Feedback = action.payload;
            }),
            builder.addCase(putFeedBack.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.Feedback = []
            })
    }
})
export default putFeedBackSlice.reducer