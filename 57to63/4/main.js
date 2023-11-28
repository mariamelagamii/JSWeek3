function checkStatus(a, b, c) {
    let name = [ a , b , c ];
    for (let i = 0; i < name.length; i++) {
        if (typeof name[i] === "string") {
            a = name[i];
        } if (typeof name[i] === "number") {
            b = name[i]
        } else if (typeof name[i] === "boolean") {
            c = name[i];
            if (c === true) {
              c = "You Are Available For Hire"
            }else {
              c = "You Are Not Available ForHire"
            }
        }
    }
    console.log(`Hello ${a}, Your Age Is ${b}, ${c}`)
}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
