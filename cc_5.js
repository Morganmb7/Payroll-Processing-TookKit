
//List of employees with their hourly rates and hours worked
const employees = [
    { name: 'Morgan', hourlyRate: 45, hoursWorked: 40 },
    { name: 'Alex', hourlyRate: 35, hoursWorked: 38 },
    { name: 'Jamie', hourlyRate: 50, hoursWorked: 42 },
    { name: 'Taylor', hourlyRate: 30, hoursWorked: 45 },
    { name: 'Jordan', hourlyRate: 55, hoursWorked: 36 },];


//calculate the base pay 
function calculateBasePay(rate, hours) {
    const baseHours = Math.min(hours, 40);
    return baseHours * rate;}

//calculate the overtime pay
function calculateOvertimePay(rate, hours) {
    const overTimeHours = Math.max(hours-40,0);
    return overTimeHours * rate * 1.5;}

//tax deduction function
function calculateTaxDeduction(grosspay){
    return grosspay*0.15;
}

