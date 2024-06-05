import { Item } from "../item/Item";

export type StockMovement = {
  createdAt: Date;
  date: Date | null;
  id: string;
  item?: Item | null;
  movementType?: "Option1" | null;
  quantity: number | null;
  updatedAt: Date;
};
