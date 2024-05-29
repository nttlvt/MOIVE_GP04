import { createSlice } from "@reduxjs/toolkit";
import { addPhimActionsThunks } from '.';

const initialState = {
    loading: false,
    error: null,
    success: false,
};

export const { reducer: addPhimReducer, actions: addPhimActions } = createSlice({
    name: 'addPhim',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addPhimActionsThunks.addPhimThunks.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(addPhimActionsThunks.addPhimThunks.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.success = true;
            })
            .addCase(addPhimActionsThunks.addPhimThunks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            });
    }
});
