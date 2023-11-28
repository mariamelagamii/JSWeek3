function multiply(...numbers) {
    let result = 1 ;
    for (let i = 0; i<numbers.length; i++) {
        if (typeof numbers[i] === "number") {
            if (parseFloat(numbers[i])) {
                numbers[i]= parseInt(numbers[i]) 
            } 
                result *=numbers[i];
        }else {
            continue;
        }
    }
    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000