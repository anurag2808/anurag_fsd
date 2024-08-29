function alertb()
{
    alert("external js function")
    
}
function alertconfirm()
{
    let x=confirm("click OK or Cancle")
    alert("user selected option: "+x)
    if (x==true)
    {
        alert ("user clicked ok")
    }
    
}
function promp()
{
    let x=prompt("enter a number whose table you want to print")
    for (let i=1;i<10;i++)
    {
        alert(x+"x"+i+"="+x*i)
    }
}
function calc() {
    let a = parseFloat(prompt("Enter 1st number"));
    let b = parseFloat(prompt("Enter 2nd number"));
    let c = parseInt(prompt("Enter 1 for +, 2 for -, 3 for *, 4 for /"));

    switch(c) {
        case 1:
            alert(a + b);
            break;
        case 2:
            alert(a - b);
            break;
        case 3:
            alert(a * b);
            break;
        case 4:
            if (b !== 0) {
                alert(a / b);
            } else {
                alert("Cannot divide by zero");
            }
            break;
        default:
            alert("Invalid operation selected");
    }
}
function calcy(operation) {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let result;

    switch(operation) {
        case "ADD":
            result=(a + b);
            break;
        case "SUB":
            result=(a - b);
            break;
        case "MUL":
            result=(a * b);
            break;
        case "DIV":
            if (b !== 0) {
                result=(a / b);
            } else {
                alert("Cannot divide by zero");
            }
            break;
        default:
            alert("Invalid operation selected");
    }
    document.getElementById('result').value = result;
}
function resetFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
}