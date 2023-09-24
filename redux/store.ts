import { configureStore } from "@reduxjs/toolkit";
import formularioSlice from "./slices/formularioSlice";




const store = configureStore({
  reducer: {
    formulario:formularioSlice
  },
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
