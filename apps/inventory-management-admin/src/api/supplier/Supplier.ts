import { Item } from "../item/Item";

export type Supplier = {
  contact: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  items?: Array<Item>;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
