import type { SauceItem } from "@/types/extras";

export interface OrderItemState {
  value: {
    id: number | undefined;
    name: string;
    size: string;
    sizePrice: number;
    dough: string;
    doughPrice: number;
    quantity: number;
    sauces: SauceItem[];
    totalPrice: number;
  };
}
