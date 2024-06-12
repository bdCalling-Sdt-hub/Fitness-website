import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";


const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    FAQData: [],
};

export const GetFAQ = createAsyncThunk(
    "GetFAQ",
    async (value, thunkAPI) => {
        try {
            let response = await baseURL.get("/manage/get-faq", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            return response.data;
        } catch (error) {
            //@ts-ignore
            const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const GetFAQSlice = createSlice({
    name: "GetFAQ",
    initialState,

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(GetFAQ.pending, (state, { payload }) => {
            state.isLoading = true;
        });
        builder.addCase(GetFAQ.fulfilled, (state, { payload }) => {
            state.isError = false;
            state.isSuccess = true;
            state.isLoading = false;
            state.message = payload.message;
            state.FAQData = payload.data;
        });
        builder.addCase(GetFAQ.rejected, (state, { payload }) => {
            state.isSuccess = false;
            state.isError = true;
            state.isLoading = false;
            //@ts-ignore
            state.message = payload.message;
        });
    },
});

// Action creators are generated for each case reducer function

export default GetFAQSlice.reducer;
