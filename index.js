const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function totalNumbers(total,number){
    return total + number;

}
// Code your solution here
const totalBatteries = batteryBatches.reduce(totalNumbers, 0)