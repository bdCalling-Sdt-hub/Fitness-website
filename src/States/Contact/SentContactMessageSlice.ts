import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    ContactMessage: {
        email: string[],
        phone: string[],
    }[]
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    ContactMessage: [],
};
interface Parameter {
    subject?: string,
    Opinions?: string,
}
export const SentContact = createAsyncThunk(
    'SentContact',
    async (value: Parameter, thunkApi) => {
        try {
            const response = await baseURL.post(`/manage/add-contact-us`, { ...value }, {
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
export const SentContactSlice = createSlice({
    name: 'SentContact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(SentContact.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(SentContact.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.ContactMessage = action.payload
            }),
            builder.addCase(SentContact.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.ContactMessage = []
            })
    }
})
export default SentContactSlice.reducer