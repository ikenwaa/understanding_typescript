// Objects

const user = {
    id: 0,
    firstName: "Augustine",
    lastName: "Ikenwa",
    dob: "13-11-2023",
    phoneNum: 234703244444,
    hasPVC: false,
    hobbies: ["coding", "reading", "surfing the net"]
}

for (let hobby of user.hobbies){
    console.log(hobby.toUpperCase())
}

// Union types
function combine(n1: number | string, n2: number | string){
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number'){
        result = n1 + n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return result;
}

const combinedAges = combine(23, 25);
console.log(combinedAges)

const combineNames = combine('Augustine', ' Ikenwa');
console.log(combineNames);
