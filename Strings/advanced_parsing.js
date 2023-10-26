
function parseAndDisplayName(fullName) {
    let spaceIndex = fullName.indexOf(" ");
    let spaceIndex2 = fullName.lastIndexOf(" ");
    console.log("Name:", fullName);

    let firstName, middleName, lastName;

    if (spaceIndex === -1) {
        firstName = fullName;
        
        console.log("Only name:", firstName);
    } else if (spaceIndex === spaceIndex2) {
        firstName = fullName.slice(0, spaceIndex);
        lastName = fullName.slice(spaceIndex + 1);
       
        console.log("First name:", firstName);
        console.log("Last name:", lastName);
    } else {
        firstName = fullName.slice(0, spaceIndex);
        middleName = fullName.slice(spaceIndex + 1, spaceIndex2);
        lastName = fullName.slice(spaceIndex2 + 1);
       
        console.log("First name:", firstName);
        console.log("Middle Name:", middleName);
        console.log("Last name:", lastName);
    }
}

parseAndDisplayName("Bella Swan");
parseAndDisplayName("Edward");
parseAndDisplayName("Renesmee Carlie Cullen");