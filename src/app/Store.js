import { configureStore } from "@reduxjs/toolkit";
import upcomingEventsReducer from "../component/Slice/Upcome"; 

export const store = configureStore({
  reducer: {
    upcoming: upcomingEventsReducer, 
  },
});
