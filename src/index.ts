import type { Equipment } from './equipment.js'

const barbell: Equipment = {
    title: 'barbell',
    id: 1,
    brandNew: true, 
    quantity: 20,
};

const treadmill: Equipment = {
    title: 'treadmill',
    id: 2,
    brandNew: false,
    quantity: 5
}


const equipmentStock: Equipment[] = [barbell];


const addEquipment = (equipment: Equipment): Equipment[] => {
    equipmentStock.push(equipment)
    return equipmentStock;
}

console.log(addEquipment(treadmill))