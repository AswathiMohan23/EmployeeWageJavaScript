class EmployeePayrollData{
    
    
    //constructor
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    // getter and setter method

    get getId(){
        return this.id;
    } 
    get getSalary(){
        return this.salary;
    }
    get getName(){
        return "id="+this.id+", name = "+this.name+" ,salary = "+this.salary;
    } 
    toString(){
        return "id="+this.id+", name = "+this.name+" ,salary = "+this.salary;
    }
    
}
let employeePayrollData =new EmployeePayrollData(1,"Roy",30000);
console.log(employeePayrollData.toString());
employeePayrollData.name="John";
employeePayrollData.id=2;
employeePayrollData.salary=800000;
console.log(employeePayrollData.toString())