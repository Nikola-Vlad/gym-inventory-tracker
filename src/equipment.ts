export interface StockItem {
    title: string;
    id: number;
    quality: Quality;
    quantity: number;
    category: Category;
    minQuantity: number;

    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;

    size?: string;
    color?: string;
}

export type Quality = 'good' | 'needs repair' | 'broken';
export type Category = 'equipment' | 'apparel' | 'nutrition';

