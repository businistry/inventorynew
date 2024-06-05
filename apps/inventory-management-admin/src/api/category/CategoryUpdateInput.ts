import { ItemUpdateManyWithoutCategoriesInput } from "./ItemUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  items?: ItemUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
