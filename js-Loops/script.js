
// // // // num 1

for (let i = 0; i <= 10; i++)
console.log(i);


// // // // num 2


let m = 0;
while ( m <= 10)
{
    console.log(m);
    m ++
}




// // // // Num 3

let  x= [1,2,3,4,5];
for (let i = 0; i < x.length; i++)
{
    console.log(x[i]);
}


// // // // num 4


for ( let i = 0; i <= 10; i += 2){
    console.log(` ${[i]}`);
     }


// // // //  num 5

let sum = 0;
for (let i = 1; i <= 10; i++ ){
   
    sum += i

}
console.log(sum)


// // // // num 6 

let y = [1,2,3,4,5];
let bignr = y[0];

for (let i = 1; i < y.length; i++){
	if (y[i] > bignr){
	bignr = y[i];
	}

}
console.log(bignr);




// // // // num 7

let arr = [5,4,3,2,1];
let smallest = arr[0];
for (let i = 1; i < arr.length; i++){
    if (arr[i] < smallest){
        smallest = arr[i];
	}
}
console.log(smallest);


// // // // num 11


num = 0
averagefind = 0

var arrAvg = [1, 2, 3, 4, 5];

for ( i = 0; i < arrAvg.length; i++ ) {
    num = num + arrAvg[i]
    
}
averagefind = num / arrAvg.length
console.log (averagefind)



// // // // num 12


number  = 5
fact    = 1;

for(let i = 2; i <= number; i++) {
    fact *= i;
    
  }
  
  
console.log(fact);


// // // // num 13


let n = 10;
let arrfib = [0, 1,];

for (let i = 2; i < n; i++) {
 arrfib[i] = arrfib[i-1] + arrfib[i-2];
}


console.log(arrfib);


// // num 14


var N = 20;
function Prime( n)
{
      
      if(n == 1 || n == 0) return false;
   
      
      for(var i = 2; i < n; i++)
      {
       
        
        if(n % i == 0) return false;
      }
      
      return true;
}
 
 


 

  for(var i = 1; i <= N; i++)
  {
      
      if(Prime(i)) {
        console.log( i );
      }
}
 

// num 15

let z = 5

for (let i = 1 ; i < 11; i++)
 console.log(z + " * " + i + " = " + z * i);


//  num 16


let arr7 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(arr7.join());



// num 17

let arr8 = [1, 2, 3, 4, 5];

console.log(arr8.reverse());


// num 18

var names = [1, 2, 3, 4, 5];

names.splice(0,2)
console.log(names);

// num 19

let nu = [1, 2, 3, 4, 5]

nu.splice(1,1)
nu.splice(2,1)
console.log(nu);


// num 20 

let Input = [1, 2, 3, 4, 5]

if (Input == 1, 2, 3, 4, 5 ){
    console.log(true);
}
else {
    console.log(false);
}



// num 21


let arr9 = [1, 1, 1, 2, 3, 3];

let num9 = {};

for (let element of arr9) {
  if (num9[element]) {
    num9[element] += 1;
  } else {
    num9[element] = 1;
  }
}
 console.log(num9[1]);

