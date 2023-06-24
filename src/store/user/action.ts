import { createAsyncThunk } from "@reduxjs/toolkit";
import { PlatformAPI } from "../../config/apiConfig";
import { setUser } from ".";

export const login = createAsyncThunk(
  'user/login',
  async(payload, thunkApi) => {
    const response : any = await PlatformAPI.post('/auth/login', payload);
    localStorage.setItem('_platform_access_token', response.accessToken);
    thunkApi.dispatch(setUser(response));
  }
)