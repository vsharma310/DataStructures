const radius = [1,2,3,4]; 

const 

const calculatearea = (r) => {
    const a = []; 
    for(i=0; i<= r.length -1; i++){
        a.push(Math.PI * radius[i] * radius[i]);
    }
    return a;
};

const calculatediameter = (r) => {
    const a = []; 
    for(i=0; i<= r.length -1; i++){
        a.push(2*radius[i]);
    }
    return a;
}

const calculatecircumference = (r) => {
    const a = []; 
    for(i=0; i<= r.length -1; i++){
        a.push(2* Math.PI *radius[i]);
    }
    return a;
}

console.log(calculatearea(radius));

console.log(calculatediameter(radius));

console.log(calculatecircumference(radius));