import { NavigateFunction } from "react-router-dom";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import IVocab from "./IVocab";

export const addVocab = createAsyncThunk(
  "vocab/addVocabStatus",
  async ({ vocabData }: { vocabData: IVocab; navigate: NavigateFunction }) => {
    const result = await axios.post("/api/vocabs", vocabData);

    return result;
  }
);

export const getVocabs = createAsyncThunk("vocab/getVocabsStatus", async () => {
  const result = await axios.get("/api/vocabs");

  return result;
});

export const getVocab = createAsyncThunk(
  "vocab/getVocabStatus",
  async (id: string) => {
    const result = await axios.get(`/api/vocabs/${id}`);

    return result;
  }
);

interface VocabState {
  list: IVocab[];
  single: IVocab | null;
  loading: "idle" | "pending" | "success" | "failure";
}

const initialState: VocabState = {
  list: [],
  single: null,
  loading: "idle",
};

export const vocabSlice = createSlice({
  name: "vocab",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addVocab.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(addVocab.fulfilled, (state, action) => {
      const navigate = action.meta.arg.navigate;

      state.loading = "success";
      toast.success("Added new Vocab!");
      navigate("/");
    });
    builder.addCase(addVocab.rejected, (state, action) => {
      state.loading = "failure";
      console.error(action.error);
      toast.error("Failed to add new Vocab!");
    });

    builder.addCase(getVocabs.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(getVocabs.fulfilled, (state, action) => {
      state.loading = "success";
      state.list = action.payload.data;
    });
    builder.addCase(getVocabs.rejected, (state, action) => {
      state.loading = "failure";
      console.error(action.error);
    });

    builder.addCase(getVocab.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(getVocab.fulfilled, (state, action) => {
      state.loading = "success";
      state.single = action.payload.data;
    });
    builder.addCase(getVocab.rejected, (state, action) => {
      state.loading = "failure";
      console.error(action.error);
    });
  },
});

export default vocabSlice.reducer;
