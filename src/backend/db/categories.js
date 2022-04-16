import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Jacket",
    description:
      "LOREM",
  },
  {
    _id: uuid(),
    categoryName: "Trouser",
    description:
      "IPSUM"
  },
  {
    _id: uuid(),
    categoryName: "Suit",
    description:
      "IRUM",
  },
];
