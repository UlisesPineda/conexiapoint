import { createSlice } from '@reduxjs/toolkit';

export const alertMessageSlice = createSlice({
   name: 'alertMessage',
   initialState: {
      isActiveMessage: false,
      isHidenButton: false,
      title: '',
      message: '',
   },
   reducers: {
      onActivateMessage: ( state, { payload } ) => {
         state.isActiveMessage = true;
         state.title = payload.title;
         state.message = payload.message;
         state.isHidenButton = payload.isHidenButton;
      },
      onDesactivateMessage: ( state ) => {
         state.isActiveMessage = false;
         state.isHidenButton = false;
         state.title = '';
         state.message = '';
      },
   },
});

export const { 
    onActivateMessage,
    onDesactivateMessage,
 } = alertMessageSlice.actions;