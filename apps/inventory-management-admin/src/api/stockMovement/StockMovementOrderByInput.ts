import { SortOrder } from "../../util/SortOrder";

export type StockMovementOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  movementType?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
