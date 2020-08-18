var number = {name : "dfds", last : "dfsdf"};
var factorial =  Factorial(number);
console.log(factorial);
function Factorial (number)
{
    try 
    {            
    var factorial=1 ;
    if(number==0)
    {
        return 1 ;
    }
    for(var counter = number ; counter>0  ;counter--)
    {
        factorial *= counter ; 
    }
    return factorial ;
    }
    catch(Error)
    {
        document.write(name.Error);
    }
}    