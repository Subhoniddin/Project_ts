import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

type Post = {
  [x: string]: any;
  author: any;
  id: number;
  title: string;
  comment: string;
  completed: boolean;
};

type postState = {
  posts: Post[];
  loading: boolean;
  error: string | null;
};

const initialState: postState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async function() {
    try {
      const res = await axios.get("http://localhost:3000/posts/");
      const date = await res.data;
      console.log(date);
      return date
    } catch (error) {
      console.log(error);
    }
  }
);

const todoSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      });
  },
});

export default todoSlice.reducer;
