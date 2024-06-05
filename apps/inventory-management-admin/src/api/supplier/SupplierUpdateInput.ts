import { ItemUpdateManyWithoutSuppliersInput } from "./ItemUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  contact?: string | null;
  email?: string | null;
  items?: ItemUpdateManyWithoutSuppliersInput;
  name?: string | null;
  phone?: string | null;
};
