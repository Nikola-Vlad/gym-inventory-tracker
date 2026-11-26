import type { Equipment, Quality } from './equipment.js'

const barbell: Equipment = {
    title: 'barbell',
    id: 1,
    quality: 'good', 
    quantity: 20,
};

const treadmill: Equipment = {
    title: 'treadmill',
    id: 2,
    quality: 'broken',
    quantity: 5
}

const kettlebell: Equipment = {
    title: 'kettlebell',
    id: 3,
    quality: 'good',
    quantity: 10,
}

const equipmentStock: Equipment[] = [barbell,kettlebell];

const addEquipment = (equipment: Equipment): Equipment[] => {
    equipmentStock.push(equipment)
    return equipmentStock;
}

const qualityFilterEquipment = (quality: Quality): Equipment[] => {
    return equipmentStock.filter(item => item.quality === quality)
}

console.log(addEquipment(treadmill))
console.log(qualityFilterEquipment('good'))