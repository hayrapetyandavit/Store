export type CategoriesType = Array<string> | undefined;

export type ProductByCategorieType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: {
    count: number;
    rate: number;

  }
};
