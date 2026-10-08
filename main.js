//Objects
//task 1
function showCarInfo(car) {
    alert(`Car Information:
            Brand: ${car.brand}
            Model: ${car.model}
            Year: ${car.year}
            Average Speed: ${car.averageSpeed} km/h`);
}

function calculateTravelTime() {
    const distance = prompt("Enter the distance in kilometers:");
    const travelTime = Math.ceil(distance / car.averageSpeed) + Math.floor(distance / car.averageSpeed / 4);
    alert(`Estimated Travel Time: ${travelTime} hours`);
}

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    averageSpeed: 60,
}
showCarInfo(car);
calculateTravelTime();
 
//task 2
function addFraction() {
    const numerator = Number(prompt("Enter the fraction's numerator:"));
    const denominator = Number(prompt("Enter the fraction's denominator:"));
    return { numerator, denominator };
}

function simplifyFraction(numerator, denominator) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const greatestCommonDivisor = gcd(numerator, denominator);
    return {
        numerator: numerator / greatestCommonDivisor,
        denominator: denominator / greatestCommonDivisor
    };
}

function sumOfTwoFractions(fraction1, fraction2) {
    const numerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
    const denominator = fraction1.denominator * fraction2.denominator;
    const simplified = simplifyFraction(numerator, denominator);
    alert(`The sum of the two fractions is: ${simplified.numerator}/${simplified.denominator}`);
}

function subtractTwoFractions(fraction1, fraction2) {
    const numerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
    const denominator = fraction1.denominator * fraction2.denominator;
    const simplified = simplifyFraction(numerator, denominator);
    alert(`The difference of the two fractions is: ${simplified.numerator}/${simplified.denominator}`);
}

function multiplyTwoFractions(fraction1, fraction2) {
    const numerator = fraction1.numerator * fraction2.numerator;
    const denominator = fraction1.denominator * fraction2.denominator;
    const simplified = simplifyFraction(numerator, denominator);
    alert(`The product of the two fractions is: ${simplified.numerator}/${simplified.denominator}`);
}

function divideTwoFractions(fraction1, fraction2) {
    const numerator = fraction1.numerator * fraction2.denominator;
    const denominator = fraction1.denominator * fraction2.numerator;
    const simplified = simplifyFraction(numerator, denominator);
    alert(`The quotient of the two fractions is: ${simplified.numerator}/${simplified.denominator}`);
}

const firstFraction = addFraction();
const secondFraction = addFraction();
sumOfTwoFractions(firstFraction, secondFraction);
subtractTwoFractions(firstFraction, secondFraction);
multiplyTwoFractions(firstFraction, secondFraction);
divideTwoFractions(firstFraction, secondFraction);



//task 3
function displayTime(time) {
    alert(`Current Time: ${time.hours}:${time.minutes}:${time.seconds}`);
}

function addSeconds(time, secondsToAdd) {
    time.seconds += secondsToAdd;
    if (time.seconds >= 60) {
        time.seconds -= 60;
        time.minutes++;
    }
    if (time.minutes >= 60) {
        time.minutes -= 60;
        time.hours++;
    }
    if (time.hours >= 24) {
        time.hours -= 24;
    }
}

function addMinutes(time, minutesToAdd) {
    time.minutes += minutesToAdd;
    if (time.minutes >= 60) {
        time.minutes -= 60;
        time.hours++;
    }
    if (time.hours >= 24) {
        time.hours -= 24;
    }
}

function addHours(time, hoursToAdd) {
    time.hours += hoursToAdd;
    if (time.hours >= 24) {
        time.hours -= 24;
    }
}

const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
};
displayTime(time);
addSeconds(time, 150);
displayTime(time);
addMinutes(time, 61);
displayTime(time);
addHours(time, 35);
displayTime(time);




//Arrays
//task 1

function showPurchasedProductsList(shoppingList) {
    const purchasedItems = shoppingList.filter(item => item.purchased);
    const upurchasedItems = shoppingList.filter(item => !item.purchased);
    let list = purchasedItems.map(item => `${item.name} - Quantity: ${item.quantity} , ${item.purchased ? 'Purchased' : 'Not Purchased'}`).join("\n") + "\n";
    list = list + upurchasedItems.map(item => `${item.name} - Quantity: ${item.quantity} , ${item.purchased ? 'Purchased' : 'Not Purchased'}`).join("\n");
    alert(list);

}

function addProductToList(shoppingList) {
    const name = prompt("Enter the product name:");
    const quantity = Number(prompt("Enter the product quantity:"));
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].name === name) {
            shoppingList[i].quantity += quantity;
            return;
        }
    }
    return shoppingList.push({ name, quantity, purchased: false });
}

function markProductAsPurchased(shoppingList) {
    const productName = prompt("Enter the product name to mark as purchased:");
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].name === productName) {
            shoppingList[i].purchased = true;
            return;
        }
    }
    alert(`Product "${productName}" not found in the shopping list.`);
}

const shoppingList = [
    { name: "Milk", quantity: 2, purchased: false },
    { name: "Bread", quantity: 1, purchased: true },
    { name: "Eggs", quantity: 12, purchased: false },
    { name: "Butter", quantity: 1, purchased: true },
    { name: "Cheese", quantity: 1, purchased: false },
];
showPurchasedProductsList(shoppingList);
addProductToList(shoppingList);
showPurchasedProductsList(shoppingList);
markProductAsPurchased(shoppingList, "Eggs");
showPurchasedProductsList(shoppingList);
 

//task 2
function showReceipt(receipt) {
    let list =""
    for (let i = 0; i < receipt.length; i++){
        list += (`Name: ${receipt[i].name}, quantity: ${receipt[i].quantity}, price: ${receipt[i].price} \n`)
    }
    alert(list)
}

function totalPrice(receipt){
    let total = 0;
    for (let i = 0; i < receipt.length; i++){
        total += receipt[i].price;
    }
    alert(`Total price = ${total}`);
}

function mostExpensive(receipt){
    let mx = 0;
    for (let i = 0; i < receipt.length; i++){
        if (receipt[i].price > mx) {
            mx = receipt[i].price;
        }
    }
    alert(`Most expensive item : ${mx}`);
}

function averagePrice(receipt){
    let total = 0;
    for (let i = 0; i < receipt.length; i++){
        total += receipt[i].price;
    }
    alert(`Average price : ${total / receipt.length}`)
}
const receipt = [
    { name: "Milk", quantity: 2, price: 2 },
    { name: "Bread", quantity: 1, price: 3 },
    { name: "Eggs", quantity: 12, price: 1 },
    { name: "Butter", quantity: 1, price: 4 },
    { name: "Cheese", quantity: 1, price: 7 }
];

showReceipt(receipt)
totalPrice(receipt)
mostExpensive(receipt)
averagePrice(receipt)


//task 3
function writeStyledText (array, text){
    const styleString = array.map(style => `${style.name}: ${style.value};`).join(" ");
    document.write(`<p style="${styleString}">${text}</p>`);
}

const cssStyles = [
  { name: "color", value: "darkblue" },
  { name: "font-size", value: "24px" },
  { name: "text-align", value: "center" },
  { name: "text-decoration", value: "underline" },
  { name: "font-family", value: "Arial, sans-serif" }
];

writeStyledText(cssStyles, "Hello world!")



//task 4

function showClassrooms(classrooms) {
    let list =""
    for (let i = 0; i < classrooms.length; i++){
        list += (`Name: ${classrooms[i].name}, seats: ${classrooms[i].seats}, faculty: ${classrooms[i].faculty} \n`)
    }
    alert(list)
}

function showClassroomsByFaculty(classrooms){
    let list =""
    const faculty = prompt("Enter faculty")
    classrooms = classrooms.filter(classrooms => classrooms.faculty === faculty)
    for (let i = 0; i < classrooms.length; i++){
            list += (`Name: ${classrooms[i].name}, seats: ${classrooms[i].seats}, faculty: ${classrooms[i].faculty} \n`)
        }
    alert(list)
}

function showAvailableClassrooms(classrooms, group){
    const availableClassrooms = classrooms.filter(room => room.faculty === group.faculty && room.seats >= group.studentsCount);
    if (availableClassrooms.length === 0){
        alert("No suitable classrooms found");
    } else {
        const list = availableClassrooms.map(room => `room: ${room.name}, seats: ${room.seats}`).join("\n");
        alert(list);
    }
}

function sortBySeats(classrooms){
    let list =""
    classrooms = classrooms.slice().sort((a, b) => a.seats - b.seats)
    for (let i = 0; i < classrooms.length; i++){
        list += (`Name: ${classrooms[i].name}, seats: ${classrooms[i].seats}, faculty: ${classrooms[i].faculty} \n`)
    }
    alert(list)
}


const classrooms = [
  { name: "201", seats: 12, faculty: "Computer Science" },
  { name: "305", seats: 18, faculty: "Software Engineering" },
  { name: "102", seats: 10, faculty: "Design" },
  { name: "404", seats: 15, faculty: "Computer Science" },
  { name: "208", seats: 20, faculty: "Cybersecurity" },
  { name: "312", seats: 14, faculty: "Design" }
];

const studentGroup = {
  name: "CS-24",
  studentsCount: 13,
  faculty: "Computer Science"
};

showClassrooms(classrooms)
showClassroomsByFaculty(classrooms)
showAvailableClassrooms(classrooms,studentGroup)
sortBySeats(classrooms)