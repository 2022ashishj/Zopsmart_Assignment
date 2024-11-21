function sum(x) {
    let total = x;
    
    function innerSum(y) {
        
        if (y === undefined) {
            return total;
        }
        
        
        total += y;
        return innerSum;
    }
    
    return innerSum;
}


console.log(sum(1)(2)(3)(4)(5)()); // 15
console.log(sum(3)(7)()); // 10