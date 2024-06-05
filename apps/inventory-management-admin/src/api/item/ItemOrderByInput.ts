import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};
