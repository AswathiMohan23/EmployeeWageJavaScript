class EmployeePayrollData{
    
    
    //constructor
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    // getter and setter method

    get getId(){
        return this.id;
    } 
    get getSalary(){
        return this.salary;
    }
    /**
     * @param {any} name
     */
    set setName(name){
        this.name
        
    }
    get getName(){
        return "id="+this.id+", name = "+this.name+" ,salary = "+this.salary;
    } 
    toString(){
        const options ={year: 'numeric',month:'long',day:'numeric'}
        const empDate=this.startDate==undefined?"undefined" : this.startDate.toLocaleDateString("en-US",options)
        return "id="+this.id+", name = "+this.name+" ,salary = "+this.salary+" ,gender = "+this.gender
                    +" , startDate = "+empDate;
    } 
}
let employeePayrollData =new EmployeePayrollData(1,"Roy",30000);
console.log(employeePayrollData.toString());
employeePayrollData.name="John";
//employeePayrollData.id=2;
//employeePayrollData.salary=800000;
console.log(employeePayrollData.toString())
let newEmployeePayrollData=new EmployeePayrollData(1,"Terrisa",30000,"F",new Date())
console.log(newEmployeePayrollData.toString())