var employee = new Object();

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]:value});
}
  
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
  
function deleteFromEmployeeByKey(employee, key) {
    var newObject = Object.assign({}, employee);
    delete newObject[key];
    return newObject;
}
  
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}