const stringifyDate=(date)=>{
    var empDate=new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const empDateString = empDate.toLocaleString("en-US", options);
    return empDateString;
}

const update=(node)=>{
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id);
    if (!empPayrollData) return;
    localStorage.setItem('editEmp',JSON.stringify(empPayrollData))
    window.location.replace(site_properties.add_emp_payroll_page);
}