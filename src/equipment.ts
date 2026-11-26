export interface Equipment {
    title: string;
    id: number;
    quality: Quality;
    quantity: number;
}

export type Quality = 'good' | 'needs repair' | 'broken';