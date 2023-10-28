import { KanbanBoard } from '.';

const toDoColumn = {
  id: 1,
  title: 'To Do',
};

const inProgressColumn = {
  id: 2,
  title: 'In Progress',
};

const doneColumn = {
  id: 3,
  title: 'Done',
};

export const dataBoard: KanbanBoard = {
  lists: [toDoColumn, inProgressColumn, doneColumn],
};
