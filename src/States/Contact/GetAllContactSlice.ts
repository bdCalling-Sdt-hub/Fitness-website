import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    Contact: {
        email: string[],
        phone: string[],
    }[]
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    Contact: [],
};

export const GetAllContact = createAsyncThunk(
    'GetAllContact',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/manage/get-contact-info`, {
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
export const GetAllContactSlice = createSlice({
    name: 'GetAllContact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetAllContact.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(GetAllContact.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.Contact = action.payload
            }),
            builder.addCase(GetAllContact.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.Contact = []
            })
    }
})
export default GetAllContactSlice.reducer