import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

console.log("Loaded API Key:", process.env.REACT_APP_NEWS_API_KEY);

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${API_KEY}`
  );
  return response.data.articles;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
        console.log("Loading news...");
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
        console.log("News fetched successfully:", action.payload);
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error("Error fetching news:", action.error.message);
      });
  },
});

export default newsSlice.reducer;
