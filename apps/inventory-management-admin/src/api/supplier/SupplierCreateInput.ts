import { ItemCreateNestedManyWithoutSuppliersInput } from "./ItemCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  contact?: string | null;
  email?: string | null;
  items?: ItemCreateNestedManyWithoutSuppliersInput;
  name?: string | null;
  phone?: string | null;
};
