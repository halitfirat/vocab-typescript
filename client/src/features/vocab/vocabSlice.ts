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

interface VocabState {
  vocabs: IVocab[];
  vocabAdded: boolean;
}

const initialState: VocabState = {
  vocabs: [],
  vocabAdded: false,
};

export const vocabSlice = createSlice({
  name: "vocab",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addVocab.pending, (state, action) => {
      state.vocabAdded = true;
    });
    builder.addCase(addVocab.fulfilled, (state, action) => {
      const navigate = action.meta.arg.navigate;

      state.vocabAdded = false;
      toast.success("Added new Vocab!");
      navigate("/");
    });
    builder.addCase(addVocab.rejected, (state, action) => {
      state.vocabAdded = false;
      console.error(action.error);
      toast.error("Failed to add new Vocab!");
    });
  },
});

export default vocabSlice.reducer;
