import { createSlice } from "@reduxjs/toolkit";
import { updatePhimActionsThunks } from '.';

const initialState = {
    loading: false,
    error: null,
    success: false,
};

export const { reducer: updatePhimReducer, actions: updatePhimActions } = createSlice({
    name: 'updatePhim',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updatePhimActionsThunks.updatePhimThunks.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(updatePhimActionsThunks.updatePhimThunks.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.success = true;
            })
            .addCase(updatePhimActionsThunks.updatePhimThunks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            });
    }
});
