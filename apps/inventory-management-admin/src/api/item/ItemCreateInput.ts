import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StockMovementCreateNestedManyWithoutItemsInput } from "./StockMovementCreateNestedManyWithoutItemsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ItemCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  stockMovements?: StockMovementCreateNestedManyWithoutItemsInput;
  supplier?: SupplierWhereUniqueInput | null;
};
