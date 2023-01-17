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

interface VocabState {
  vocabs: IVocab[];
  addingVocab: "idle" | "pending" | "success" | "failure";
  gettingVocabs: "idle" | "pending" | "success" | "failure";
}

const initialState: VocabState = {
  vocabs: [],
  addingVocab: "idle",
  gettingVocabs: "idle",
};

export const vocabSlice = createSlice({
  name: "vocab",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addVocab.pending, (state, action) => {
      state.addingVocab = "pending";
    });
    builder.addCase(addVocab.fulfilled, (state, action) => {
      const navigate = action.meta.arg.navigate;

      state.addingVocab = "success";
      toast.success("Added new Vocab!");
      navigate("/");
    });
    builder.addCase(addVocab.rejected, (state, action) => {
      state.addingVocab = "failure";
      console.error(action.error);
      toast.error("Failed to add new Vocab!");
    });
    builder.addCase(getVocabs.pending, (state, action) => {
      state.gettingVocabs = "pending";
    });
    builder.addCase(getVocabs.fulfilled, (state, action) => {
      state.gettingVocabs = "success";
      state.vocabs = action.payload.data;
    });
    builder.addCase(getVocabs.rejected, (state, action) => {
      state.gettingVocabs = "failure";
      console.error(action.error);
    });
  },
});

export default vocabSlice.reducer;
