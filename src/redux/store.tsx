import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "@/redux/features/auth";
import blogReducer from "@/redux/features/allBlogs";
import adminReducer from "@/redux/features/addAdmin"
import adminProfileReducer from "@/redux/features/adminProfile"

const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    admin:adminReducer,
    adminProfile:adminProfileReducer
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
