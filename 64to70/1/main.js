function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let name = [];
        for (let i = 0; i<zName.length; i++) {
            name += zName[i];
            if (i === (name.indexOf(" "))) {
                i++;
                name += zName[i];
                break;
                }
            }
            return `${name}.`;
    }
    function ageWithMessage(zAge) {
        let age;
        age =  parseInt(zAge)
        return `Your Age Is ${age}`
    }
    function countryTwoLetters(zCountry) {
          let twoletters = [];
          for (let i = 0; i<zCountry.length; i++) {
              if (i === 2) {
                  break;
                }
                twoletters += zCountry[i]
            }
            return `You Live In ${twoletters.toUpperCase()} `
      }
    function fullDetails() {
        let cocat = `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
      return  cocat ;
    }
    return fullDetails(); // Do Not Edit This
}

// Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log("Hello Osama M., Your Age Is 38, You Live In EG");

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
console.log("Hello Ahmed A., Your Age Is 32, You Live In SY");
  // Hello Ahmed A., Your Age Is 32, You Live In SY