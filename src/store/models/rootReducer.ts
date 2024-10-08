import { combineReducers } from '@reduxjs/toolkit';
import CharacterSlice from './CharacterSlice';

export default combineReducers({
  harrypotter: CharacterSlice,
});
