export interface Sauce {
  id: number;
  name: string;
  price: number;
}

export interface SauceItem extends Sauce {
  quantity: number;
}

export interface Extras {
  thickDoughPrice: number;
  sauces: Sauce[];
}
