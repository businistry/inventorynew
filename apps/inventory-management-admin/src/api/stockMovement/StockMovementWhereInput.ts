import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StockMovementWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  movementType?: "Option1";
  quantity?: IntNullableFilter;
};
