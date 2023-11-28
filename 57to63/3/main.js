function ageInTime(theAge) {
    // Your Code Here
    if(theAge<10|| theAge>100) console.log("Age Out Of Range");
    else {
        console.log(`You Lived: \n ${theAge*12} Months \n ${theAge*12*4} Weeks \n ${theAge*12*4*7} Days\n ${theAge*12*4*7*24} Hours\n ${theAge*12*4*7*24*60} Minutes\n ${theAge*12*4*7*24*60*60} Seconds`);
    }
}

// Needed Output
ageInTime(110); // 
ageInTime(38); // Months Example => 456 Months