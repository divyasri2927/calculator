//1.Performing calculator operation which contains[/,*,+,-] operators
//2.Giving input as a command line argument.
//3.Getting output according to the given input

//Importing Modules to get output
const sum=require('./sum')
const diff=require('./subtract')
const mul=require('./multiply')
const div=require('./divide')
var input=process.argv[2]; 
//var input='1/3*4';
var operators=[]        //to store operators in the array
var number=[];          //to store numbers in the array
for(var i=0;i<input.length;i++){
    var s=input.charAt(i);  
    if(s=='*' || s == '+' || s == '-' || s == '/'){
        operators.push(s);
    }
    else{
        number.push(Number(s));
    }
} 

console.log(operators);
console.log(number);
var op1 = number[0];
var op2 =number[1];
x=0;
y=2;

for(let i=0;i<number.length-1 ;i++)
{
    
    if(operators[x] === '+')
    {
        op1=sum.sum(op1,op2) //calling sum function sum add module
           
    }
    else if(operators[y] === '-')
    {
        
       op1=diff.subtract(op1,op2) //calling diff function from subtract module
            
    }
    else if(operators[x] === '*')
    {
       
        op1=mul.multiply(op1,op2)    //calling mul function from multiply module
             
    }
    else if(operators[x] === '/')
    {
        op1=div.divide(op1,op2)    //calling div function from division module
    }
    op2=number[y++];
    x++;
}
console.log(op1);
