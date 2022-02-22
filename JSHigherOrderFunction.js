const radius = [1,2,3,4];

const area = (r) => {
    const a = []; 
    for(i=0; i<= r.length -1; i++){
        a.push(Math.PI * radius[i] * radius[i]);
    }
    return a;
};

const diameter = (r) => {
    const a = []; 
    for(i=0; i<= r.length -1; i++){
        a.push(2*radius[i]);
    }
    return a;
}

const circumference = (r) => {
    const a = []; 
    for(i=0; i<= r.length -1; i++){
        a.push(2* Math.PI *radius[i]);
    }
    return a;
}

console.log(area(radius));

console.log(diameter(radius));

console.log(circumference(radius));