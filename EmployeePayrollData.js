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
        let nameRegex=RegExp("[A-Z]{1}[a-z]{3,}")
        if(nameRegex.test(name)){
            this.name=name;
        }
        else throw 'Name is incorrect';
        
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
//employeePayrollData.id=2;
//employeePayrollData.salary=800000;
let employeePayrollData2=new EmployeePayrollData(2,"Terrisa",30000,"F",new Date())
console.log(employeePayrollData2.toString())
let employeePayrollData3=new EmployeePayrollData(3,"Anna",30000,"F",new Date())
console.log(employeePayrollData3.toString())
