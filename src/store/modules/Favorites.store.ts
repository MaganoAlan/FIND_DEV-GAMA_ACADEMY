import { createSlice } from "@reduxjs/toolkit";
import { IProfile } from "../../types";
import { Alert } from "react-native";

interface IProfileProps {
  profile: IProfile;
}

const favoritesState = createSlice({
  name: "favoritesState",
  initialState: {
    favorites: [],
    isFavorite: false,
  },
  reducers: {
    addFavorite(state, profile): void {
      const email = profile.payload.email;
      const exists = state.favorites.find((e) => e.payload.email === email);

      if (exists === undefined) {
        state.favorites = [...state.favorites, profile];
        return;
      }
      return Alert.alert("Favoritar", "Esse Dev já é favorito");
    },
    removeFavorite(state, profile) {
      const email = profile.payload.email;
      const exists = state.favorites.find((e) => e.payload.email === email);

      const index = state.favorites.indexOf(exists);
      state.favorites.splice(index, 1);
      return;
    },
    existsInFavorites(state, profile) {
      const email = profile.payload.email;
      const exists = state.favorites.find((e) => e.payload.email === email);

      if (exists === undefined) {
        state.isFavorite = false;
        return;
      }
      state.isFavorite = true;
      return;
    },
  },
});

export const { addFavorite, removeFavorite, existsInFavorites } =
  favoritesState.actions;
export default favoritesState.reducer;
