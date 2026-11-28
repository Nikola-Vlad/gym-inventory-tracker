import type { StockItem, Quality } from './equipment.js'

const barbell: StockItem = {
    title: 'barbell',
    id: 1,
    quality: 'good', 
    quantity: 21,
    category: 'equipment',
    minQuantity: 20
};

const treadmill: StockItem = {
    title: 'treadmill',
    id: 2,
    quality: 'broken',
    quantity: 5,
    category: 'equipment',
    minQuantity: 3
}

const kettlebell: StockItem = {
    title: 'kettlebell',
    id: 3,
    quality: 'good',
    quantity: 6,
    category: 'equipment',
    minQuantity: 5,
}

const stock: StockItem[] = [barbell,kettlebell];

const addEquipment = (equipment: StockItem): StockItem[] => {
    stock.push(equipment)
    return stock;
}

const filterByQuality = (quality: Quality): StockItem[] => {
    return stock.filter(item => item.quality === quality)
}

const lowStockFilter = (): StockItem[] => {
    return stock.filter(item => item.quantity <= item.minQuantity)
}

const lowStockAlert = (): void => {
    const lowStock = lowStockFilter();

    if(lowStock.length === 0) {
        console.log('All stock levels are fine.')
    } else {
        lowStock.forEach(item => {
            console.log(`Low stock: ${item.title} (${item.quantity}/min ${item.minQuantity})`)
        })
    }
}

const findItemById = (id: number): StockItem | undefined => {
    return stock.find(item => item.id === id)
}

// console.log(addEquipment(treadmill))
// console.log(filterByQuality('good'))
// console.log(lowStockFilter())
// lowStockAlert();
console.log(findItemById(3)?.title)