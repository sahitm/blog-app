import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {id:'1',title: 'batman',content:"lorem ipsium guvd jhfiabfg aisfdbidbf akjvbf"},
  {id:'2',title: 'ironman',content:"lorem ipsium guvd jhfiabfg aisfdbidbf akjvbf"},
];


export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

  },
});

export const { increment, decrement } = postsSlice.actions;



export default postsSlice.reducer;
