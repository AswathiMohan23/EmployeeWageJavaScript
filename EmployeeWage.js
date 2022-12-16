//UC1
{
    const IS_ABSENT = 0;
    let empCheck=Math.floor(Math.random()*10)%2;
    if(empCheck == IS_ABSENT){
        console.log("Employee is Absent")
        return;
    }else{
        console.log("Employee is Present")
    }
}

//UC2 and refactored uc2 to do uc3

    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOUR=20;
    const NUM_OF_WORKING_DAYS=2;


    let empHrs=0;
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
    empHrs=getWorkingHours(empCheck); 
    empWage = empHrs*WAGE_PER_HOUR;
    console.log("Total hours : "+empHrs+"\nEmployee Wage : "+empWage);