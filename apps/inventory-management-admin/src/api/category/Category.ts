import { Item } from "../item/Item";

export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  items?: Array<Item>;
  name: string | null;
  updatedAt: Date;
};
