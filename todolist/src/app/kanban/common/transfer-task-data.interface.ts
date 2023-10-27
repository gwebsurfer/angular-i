import { KanbanList } from '../../../models';

export interface TransferTaskData {
  fromList: KanbanList;
  fromIndex: number;
  toList: KanbanList;
  toIndex: number;
}
