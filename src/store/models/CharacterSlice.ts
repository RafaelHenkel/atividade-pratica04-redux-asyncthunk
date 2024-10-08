import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { doGet } from '../../services/api';

export interface HarryPotterType {
  id: string;
  name: string;
  image: string;
  createdAt: string;
}

const initialState: HarryPotterType[] = [];

export const getCharacters = createAsyncThunk('characters/getCharacters', async () => {
  const response = await doGet('/characters');

  if (response.length > 0) {
    return response;
  }

  return [];
});

const CharactersSlice = createSlice({
  name: 'harryPotter',
  initialState: { characters: initialState, loading: false },
  reducers: {
    addCharacters: (state, action: PayloadAction<HarryPotterType>) => {
      state.characters.push({ ...action.payload });
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
      state.loading = false;
      return state;
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      console.log(action.error);
      state.loading = false;
      return state;
    });
    builder.addCase(getCharacters.pending, state => {
      state.loading = true;
      return state;
    });
  },
});

export const { addCharacters } = CharactersSlice.actions;
export default CharactersSlice.reducer;
