import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./../../services/users-service.js"

export const signupThunk = createAsyncThunk(
    "user/signup", async (user) => {
        const newUser = await authService.registerUser(user);
        return newUser;
    }
);


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await authService.loginUser(credentials);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        return await authService.currentProfile();
    });

export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logoutUser();
    });
