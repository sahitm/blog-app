import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {id:'1',title: 'batman',content:"lorem ipsium guvd jhfiabfg aisfdbidbf akjvbf"},
  {id:'2',title: 'ironman',content:"lorem ipsium guvd jhfiabfg aisfdbidbf akjvbf"},
  
];


const postsSlice = createSlice({
  name: 'posts',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    postAdded : (state,action) => {
      state.push(action.payload)
    }
  },
});

export const selectAllPosts = (state) => state.posts

export const { postAdded  } = postsSlice.actions;

export default postsSlice.reducer;
