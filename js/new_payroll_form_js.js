
window. addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
    if (name.value. length == 0) {
    textError.textContent ="";
    return;}
    try {
    (new EmployeePayrollData()).name = name.value;;
    textError.textContent = "";
    
    } catch (e) {
    textError.textContent = e;
}  
});


const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
});
});

const dateCheck=()=>{
    const dateerror=document.querySelector('.date-error');
    let dateString = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
    getInputValueById('#year') ;
    let date=Date.parse(dateString);
    try{
        (new EmployeePayrollData()).startDate=date;
        dateerror.textContent="";
    }
    catch (e) {
        dateerror.textContent = e;
    }  
    }

const save=() => {
    try {
    let employeePayrollData = createEmployeePayroll();
    createAndUpdateStorage(employeePayrollData);
    } catch (e) {
        alert(e.toString());
    return;
    }
}

function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList") );
    if(employeePayrollList != undefined) {
    employeePayrollList.push(employeePayrollData) ;
    } else{
    employeePayrollList = [employeePayrollData]
    }
    alert (employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList) );
}

const resetForm = () => {
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues(' [name=gender]');
    unsetSelectedValues(' [name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month', 'January');
    setValue('#year', '2020');
}
    
    const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAlLl(propertyValue) ;
    allItems.forEach(item => {
    item.checked = false;
    });}
    
    const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;}
    
    const setValue = (id, value) => {
    const element = document.querySelector(id);
    element. value= value;
    }    
    
const createEmployeePayroll = () => {
    
    let employeePayrollData = new EmployeePayrollData();
    try {
    employeePayrollData.name = getInputValueById('#name');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
    getInputValueById('#year') ;
    employeePayrollData.startDate = Date.parse(date) ;
    var v=0;
    } catch (e) {
    throw e;
    }
    employeePayrollData.profilePic = getSelectedValues(' [name=profile] ').pop();
    employeePayrollData.gender = getSelectedValues(' [name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department] ');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById( '#notes'); 
    alert (employeePayrollData.toString());
    return employeePayrollData;
}
const getSelectedValues = (propertyValue) => {
    
    let allItems = document. querySelectorAll(propertyValue) ;
    let sellItems = [];
    allItems.forEach(item => {
    if(item.checked) sellItems.push(item.value) ;
    });
    return sellItems;
}

const getInputValueById = (id) => {
    let value = document. querySelector(id).value;
    return value;}
