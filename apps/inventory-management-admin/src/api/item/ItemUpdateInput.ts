import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StockMovementUpdateManyWithoutItemsInput } from "./StockMovementUpdateManyWithoutItemsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ItemUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  stockMovements?: StockMovementUpdateManyWithoutItemsInput;
  supplier?: SupplierWhereUniqueInput | null;
};
