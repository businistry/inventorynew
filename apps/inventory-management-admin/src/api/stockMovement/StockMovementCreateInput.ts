import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type StockMovementCreateInput = {
  date?: Date | null;
  item?: ItemWhereUniqueInput | null;
  movementType?: "Option1" | null;
  quantity?: number | null;
};
