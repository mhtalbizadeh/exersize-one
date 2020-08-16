var start1 = 2;
var height1 = 0;
var start2 = 1;
var height2 = 500;
//Sets the value
var Kangaroo = [start1,height1 , start2 ,height2];
//Coverst a array.
Compariso(Kangaroo); 
//call methods
function Compariso( Kangaroo = [start1,height1 , start2 ,height2])
{var sumKangarooOne = Kangaroo[0]  ;
    var sumKangarooTwo = Kangaroo[2] ;
    var indexI = 1 ;
    var indexJ = 3 ;
    var Space= 0 ;
    var counter  = 0 ;
    var Distances = [] ;
    //Build a new array for distances.
    one :while(indexI<10)
    {
        sumKangarooOne += Kangaroo[1];
        sumKangarooTwo += Kangaroo[indexJ];
        //Addition of heights.
        Space = sumKangarooOne - sumKangarooTwo ;
        //Get the distance between two kangaroos.
        Space = Math.abs(Space);
        //Converts its value to positive
        Distances.push(Space) ;
        //Add  space to the array.
        counter++ ;
        indexI++;
        if(counter>=4)
        {
            //Because the array  length reaches four.
            for(var counterOne = 0 ; counterOne<=Distances.length ; counterOne++)
            {
                //If the distance was zero, find it.
                if(Distances[counterOne]==0)
                {
                    console.log("Yes");
                    break one ;
                }
            }
            for (var counterOne = 0 ; counterOne<Distances.length ; counterOne++)
            {
                if(Distances[counterOne] <= Distances[counterOne+1])
                {
                    console.log("No");
                    break one ;
                }
                else if (Distances[counterOne]> Distances[counterOne+1])
                {
                    continue one  ;
                }
                //If the distances are greater or equal, it means that they do not reach each other.
                //If the distances are shorter, it means that they do not reach each other.
            }
        }
    }
}