import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Task from "../../app/domain/Task";

export interface TaskState {
  task?: Task;
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    StartTask: (state, action: PayloadAction<Task>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.task = action.payload;
    },
    StopTask: (state) => {
      if (state.task) {
        state.task.endDateTime = Date.now();
        state.task.accumulatedTime += state.task.endDateTime - state.task.startDateTime
        state.tasks.push(state.task);
        delete state.task;
      }
    },
    GeneralStopTask: (state) => {
      if (state.task) {
        delete state.task;
      }
    },
    UpdateTask(state, action: PayloadAction<Task>) {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (taskIndex >= 0) {
        state.tasks[taskIndex] = action.payload
      }
    },
    ResumeTask(state, action: PayloadAction<Task>) {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (taskIndex >= 0) {
        state.tasks[taskIndex].startDateTime = Date.now()
        state.tasks[taskIndex].endDateTime = undefined
        state.task = state.tasks[taskIndex]
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { StartTask, StopTask, UpdateTask, GeneralStopTask, ResumeTask } = taskSlice.actions;

export default taskSlice.reducer;
