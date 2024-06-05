import { Category } from "../category/Category";
import { StockMovement } from "../stockMovement/StockMovement";
import { Supplier } from "../supplier/Supplier";

export type Item = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  quantity: number | null;
  stockMovements?: Array<StockMovement>;
  supplier?: Supplier | null;
  updatedAt: Date;
};
