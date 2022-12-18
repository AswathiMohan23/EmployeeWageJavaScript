class EmployeePayrollData{
    
    
    //constructor
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
        this.pinCode=params[5];

    }

    // getter and setter method

    get getId(){
        return this.id;
    } 
    get getSalary(){
        return this.salary;
    }
      /**
     * @param {any} id
     */
      set setId(id){
        let idRegex=RegExp("^[1-9]")
        if(idRegex.test(id)){
            this.id=id;
        }else
            throw 'id is incorrect ...id should be a non zero number';
    }
    /**
     * @param {any} name
     */
    set setName(name){
        let nameRegex=RegExp("[A-Z]{1}[a-z]{3,}$")
        if(nameRegex.test(name)){
            this.name=name;
        }else
            throw 'Name is incorrect';
    }
    /**
     * @param {any} gender
     */
    set setGender(gender){
        let genderRegex=RegExp("[M,F]{1}")
        if(genderRegex.test(gender)){
            this.name=gender;
        }else
            throw 'gender is incorrect it should be either F or M';
    }
    /**
     * @param {string} date
     */
    set setStartDate(date){
        let dateRegex=RegExp("^\\d[1960-2022]{4}-\\d{2}-\\d{2}$")
        if(dateRegex.test(date)){
            this.name=date;
        }else
            throw 'StartDate is incorrect year should be between 1960 - 2022';
    }

    /**
     * @param {string} pinCode
     */
    set setPinCode(pinCode){
        let pinCodeRegex=RegExp("^[1-9]{1}[0-9]{5}")
        if(pinCodeRegex.test(pinCode)){
            this.pinCode=pinCode;
            console.log("pincode is valid")
        }else
            throw 'pinCode is incorrect ... first digit should be between 1-9 ,should contain only numbers and should contain 6 digits'
    }  

    get getName(){
        return "id="+this.id+", name = "+this.name+" ,salary = "+this.salary;
    } 
    toString(){
        const options ={year: 'numeric',month:'long',day:'numeric'}
        const empDate=this.startDate==undefined?"undefined" : this.startDate.toLocaleDateString("en-US",options)
        return "id="+this.id+", name = "+this.name+" ,salary = "+this.salary+" ,gender = "+this.gender
                    +" , startDate = "+empDate+" , pincode = "+this.pinCode;
    } 
}
let employeePayrollData =new EmployeePayrollData(1,"Roy",30000);
console.log(employeePayrollData.toString());
//employeePayrollData.id=2;
let employeePayrollData2=new EmployeePayrollData(2,"Terrisa",30000,"F",new Date(),674307)
let employeePayrollData3=new EmployeePayrollData(3,"Anna",30000,"F",new Date(),450054)
console.log(employeePayrollData2.toString())
console.log(employeePayrollData3.toString())
try{
    employeePayrollData.setId=0 //throws an error name is incorrect because it is starting with small letter
    console.log(employeePayrollData.toString())
}catch(e){
    console.error(e);
}
try{
    employeePayrollData.setName="lucy" //throws an error name is incorrect because it is starting with small letter
    console.log(employeePayrollData.toString())
}catch(e){
    console.error(e);
}
try{
    employeePayrollData.setGender="X" //throws an error name is incorrect because it is starting with small letter
    console.log(employeePayrollData.toString())
}catch(e){
    console.error(e);
}
try{
    employeePayrollData.setStartDate="2023-11-21" //throws an error name is incorrect because it is starting with small letter
    console.log(employeePayrollData.toString())
}catch(e){
    console.error(e);
}
try{
    employeePayrollData.setPinCode="400088" //throws an error name is incorrect because it is starting with small letter
    console.log(employeePayrollData.toString())
}catch(e){
    console.error(e);
}
try{
    employeePayrollData.setPinCode="A400088" //throws an error name is incorrect because it is starting with small letter
    console.log(employeePayrollData.toString())
}catch(e){
    console.error(e);
}

