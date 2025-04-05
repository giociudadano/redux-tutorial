import {configureStore} from '@reduxjs/toolkit';
import ticketsSlice from "./ticketsSlice.ts";

export const store = configureStore({
   reducer: {
       tickets: ticketsSlice
   }
});