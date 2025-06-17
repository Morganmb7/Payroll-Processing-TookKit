
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

//process payroll
function processPayroll(employees) {
    const basePay =calculateBasePay (employees.hourlyRate, employees.hoursWorked);
    const overtimePay = calculateOvertimePay(employees.hourlyRate, employees.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxDeduction = calculateTaxDeduction(grossPay);
    const netPay = grossPay - taxDeduction;

    return {
        name: employees.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        taxDeduction: taxDeduction.toFixed(2),
        netPay: netPay.toFixed(2)
    };

    }

    //loop through employees and log payroll
    employees.forEach(employee => {
        const payroll = processPayroll(employee);
        console.log(`Payroll for ${payroll.name}:`);
        console.log(`Base Pay: $${payroll.basePay}`);
        console.log(`Overtime Pay: $${payroll.overtimePay}`);
        console.log(`Gross Pay: $${payroll.grossPay}`);
        console.log(`Tax Deduction: $${payroll.taxDeduction}`);
        console.log(`Net Pay: $${payroll.netPay}`);
        console.log('-----------------------------');
    }
    );
