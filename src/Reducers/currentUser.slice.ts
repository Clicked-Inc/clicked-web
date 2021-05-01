import { IUser } from '@Models/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CurrentUserState {
  user: IUser;
}

const initialState: CurrentUserState = {
  user: null,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    clearCurrentUser: (state) => {
      state.user = null;
    },
  },
});

const currentUserReducer = currentUserSlice.reducer;

export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions;
export const selectCurrentUser = (state: RootState): IUser =>
  state.currentUser.user;

export default currentUserReducer;
