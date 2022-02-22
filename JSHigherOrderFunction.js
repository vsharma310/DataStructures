const radius = [1,2,3,4]; 

const area = (r) => {
    return (Math.PI*r*r);
};

const diameter = (r) => {
    return (2*r); 
};

const circumference = (r) => {
    return (2*Math.PI*r);
};

const calculate = (r, logic) => {
    const a = []; 
    for(i=0; i<= r.length -1; i++){
        a.push(logic(r[i]));
    }
    return a;
};

console.log(calculate(radius,area)); 

console.log(calculate(radius,diameter)); 

console.log(calculate(radius,circumference)); 


// const calculatearea = (r) => {
//     const a = []; 
//     for(i=0; i<= r.length -1; i++){
//         a.push(Math.PI * radius[i] * radius[i]);
//     }
//     return a;
// };

// const calculatediameter = (r) => {
//     const a = []; 
//     for(i=0; i<= r.length -1; i++){
//         a.push(2*radius[i]);
//     }
//     return a;
// }

// const calculatecircumference = (r) => {
//     const a = []; 
//     for(i=0; i<= r.length -1; i++){
//         a.push(2* Math.PI *radius[i]);
//     }
//     return a;
// }


// console.log(calculatearea(radius));

// console.log(calculatediameter(radius));

// console.log(calculatecircumference(radius));