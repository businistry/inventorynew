import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";

export type SupplierWhereInput = {
  contact?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
