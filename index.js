var start1 = prompt('please write a start1: ');
var start2 = prompt('please write a start2: ');
var height1 = prompt('please write a height1: ');
var height2 = prompt('please write a height2: ');
var start1 = Number(start1);
var start2 = Number(start2);
var height1 = Number(height1);
var height2  = Number(height2);
var Kangaroo = [start1,height1 , start2 ,height2];
var a = Kangaroo[0]  ;
var b = Kangaroo[2] ;
var i = 1 ;
var j = 3 ;
var c= 0 ;
var k  = 0 ;
console.log("a :" + a);
console.log("b : " + b );
var Distances = [] ;
one :while(i=1)
{
    a =a + Kangaroo[i];
    b =b + Kangaroo[j];
    c = a - b ;
    console.log("a :" + a);
    console.log("b : " + b );
    Distances.push(c) ;
    k++ ;
    console.log(Distances);
    if(k>=4)
    {
        console.log("check") ;
        for(var x = 0 ; x<=Distances.length ; x++)
        {
            if(Distances[x]==0)
            {
                console.log("Yes");
                break one ;
            }
        }
        for (var x = 0 ; x<Distances.length ; x ++)
        {
            if(Distances[x] < Distances[x+1])
            {
                console.log("No");
                break one ;
            }
            else if (Distances[x]>= Distances[x+1])
            {
                continue one  ;
            }
        }
    }
}