import { configureStore } from '@reduxjs/toolkit';
import { 
    alertMessageSlice, 
} from './slices';

export const store = configureStore({
    reducer: {
        alertMessage: alertMessageSlice.reducer,
    },
});