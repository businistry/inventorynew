import { ItemCreateNestedManyWithoutCategoriesInput } from "./ItemCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  items?: ItemCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
