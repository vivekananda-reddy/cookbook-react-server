import { createSlice } from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, profileThunk, signupThunk} from "./../Thunks/users-thunk.js";
import signUp from "../SignUp";


const userSlice = createSlice({
                                  name: "auth",
                                  initialState: { currentUser: null },
                                  reducers: {},
                                  extraReducers: {
                                      [loginThunk.fulfilled]: (state, { payload }) => {
                                          state.currentUser = payload;
                                      },
                                      [logoutThunk.fulfilled]: (state) => {
                                          state.currentUser = null;
                                      },
                                      [profileThunk.fulfilled]: (state, { payload }) => {
                                          state.currentUser = payload;
                                      },
                                      [signupThunk.fulfilled]: (state, { payload }) => {
                                          state.currentUser = payload
                                      }
                                  },
                              });
export default userSlice.reducer;