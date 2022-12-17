
    const IS_ABSENT = 0;
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOUR=20;
    const NUM_OF_WORKING_DAYS=10;
    const MAX_HOURS_IN_MONTH=160;
    let totalWorkingDays=0; 
    let empDailyWageArray=new Array();
    let empDailyWageMap=new Map();
    let empHrs=0;
    let totalEmpHrs=0;
    let count=0;
   let nonWrkingDays=new Array();
   let partWorkingDays=new Array();
   let fullWorkingDays=new Array();
   let empDailyHrsAndWageArr=new Array();

    let empDailyHrsMap=new Map();


    let empCheck=Math.floor(Math.random()*10)%2;
    if(empCheck == IS_ABSENT){
        console.log("Employee is Absent")
        return;
    }else{
        console.log("Employee is Present")
    }

    function calculateDailyWage(){
        return empHrs*WAGE_PER_HOUR;
    }
    

    empCheck=Math.floor(Math.random()*10)%3;
    
    function getWorkingHours(empCheck){
        switch(empCheck){
            case IS_PART_TIME: return PART_TIME_HOURS;
            case IS_FULL_TIME : return FULL_TIME_HOURS;
            default : return 0;
        }
    }
    for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
        let empCheck=Math.floor(Math.random()*10)%3;
        empHrs+=getWorkingHours(empCheck);
    }
    while(totalEmpHrs<=MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random()*10)%3;
        totalEmpHrs+=getWorkingHours(empCheck)
        totalEmpHrs+=empHrs;
        empDailyWageArray.push(
        {
            dayNum:totalWorkingDays,
            dailyHours:empHrs,
            dailyWage:calculateDailyWage(empHrs),
            toString(){
                return '\nDay'+this.dayNum+'=> working hours is '+this.dailyHours+
                'And Wage Earned = '+this.dailyWage
            },
        });
    }    
    console.log("showing daily hours worked and wage earned : "+empDailyHrsAndWageArr)
    console.log("employee wage map = "+empDailyWageMap)
    let empWage=totalEmpHrs*WAGE_PER_HOUR;
   // console.log("total days : "+totalWorkingDays+" \nTotal hours : "+totalEmpHrs+"\nEmployee Wage : "+empWage)


    // helper functions
    let totEmpWage=0;
    function sum(dailyWage){
        totEmpWage+=dailyWage;
    }
    empDailyWageArray.forEach(sum);
    console.log("Total days : "+totalWorkingDays+"\nTotal hours : "+totalEmpHrs+ "\nEmp Wage : "+totEmpWage);
    
    function totalWages(totalWage,dailyWage){
        return totalWage+dailyWage;
    }
    console.log("Employee wage with reduce : "+empDailyWageArray.reduce(totalWages,0));

    // show the day along with daily wage using array map helper function

    let dailyCntr=0;
    function mapDayWithWage(dailyWage){
        dailyCntr++;
        return dailyCntr+ " = "+dailyWage;
    }
    let mapDayWithWageArray=empDailyWageArray.map(mapDayWithWage);
    console.log("map with wage : "+mapDayWithWageArray);

    // show days when full time wage of 160 were earned

    function fullTimeWage(dailyWage){
        return dailyWage.includes("160")
    }
    
    let fullDayWageArray=mapDayWithWageArray.filter(fullTimeWage);
    //console.log("daily wage filter when fullTimeWage is earned : "+fullDayWageArray)

   // find the first occurence when full time wage was earned using find function
   function findFullTimeWage(dailyWage){
        return dailyWage.includes("160")
   } 
   console.log("first time full time wage was earned on day : "+mapDayWithWageArray.find(findFullTimeWage));

   // check if every element of full time wage is truely holding full time wage

   function isAllFullTimeWage(dailyWage){
        return dailyWage.includes("160")
   }
   console.log(" check all elements have full time wage : "+fullDayWageArray.every(isAllFullTimeWage))

   // check if there is any part time wage

   function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80")
   }
   console.log("check if any part time wage : "+mapDayWithWageArray.some(isAnyPartTimeWage))

   // find the number of days the employee worked
   function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage>0)
        return numOfDays+1;
    return numOfDays;    

   }
   console.log("number of days employee worked : "+empDailyWageArray.reduce(totalDaysWorked,0))

   function totalWages(totalWage,dailyWage){
        return totalWage+dailyWage;
   }
   //console.log("employee map total Hours : "+Array.from(empDailyWageMap.values()).reduce(totalWages))

   const findTotal=(totalVal,dailyVal)=>{
        return totalVal+dailyVal;
   }
   
   let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal,0)
   let totalSalary=empDailyWageArray.filter(dailyWage => dailyWage>0).reduce(findTotal,0);
   //console.log("Employee wage with arrow : "+" Total hours : "+totalHours+" total wages : "+totalSalary)

  
   empDailyHrsMap.forEach((value,key)=>{
        if(value == 8)fullWorkingDays.push(key);
        else if(value == 4) partWorkingDays.push(key)
        else nonWrkingDays.push(key);
    
   });
   