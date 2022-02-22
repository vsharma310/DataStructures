function reverseArray(a) {
    // Write your code here

    var t = [];
   for (var i = a.length-1; i >= 0; i--) 
   {
      // console.log(arr[i]);
       t.push(a[i]);

   }
   return t;

}

function main() {
    const arr = [1,2,3,4];


    console.log(arr);
    const y = reverseArray(arr);

    console.log(y);
    
   // console.log(arr);
   // arr.reverse();
    //console.log(arr);

   // const y =[];
   // console.log('length of y : '+ y.length);
   // y.push(arr[0]);
   // console.log('length of y : '+ y.length);

  // var t = new Array();
   
  // console.log(t);

}

main();
