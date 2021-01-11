// comment

'use strictly';

let a = Number(prompt('Enter a: ', ' '));
let b = Number(prompt('Enter b: ', ' '));

let key = prompt('Enter operation: ', ' ');

switch (key) {
    case '+':
        alert(a+b)
        break;

    case '-':
        alert(a-b)
        break;

    case '/':
        alert(a/b)
        break;
        
    case '*':
        alert(a*b)
        break;

    case '%':
        alert(a%b)
        break;

    default:  
    alert('Wrong operation')
    break;
}