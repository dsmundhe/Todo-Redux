import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      text: "Hello DM",
      id: 1,
    },
  ],
  val: 1,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        text: action.payload,
        id: nanoid(),
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo1) => todo1.id !== action.payload);
    },
    addval: (state, action) => {
      state.val = state.val + 1;
    },
    decval: (state, actiion) => {
      state.val = state.val - 1;
    },
  },
});

export const { addTodo, removeTodo, addval, decval } = todoSlice.actions;
export default todoSlice.reducer;
