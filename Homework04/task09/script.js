console.log("Connected");

// Task 9: Convert Number to Corresponding Month Name
// Create a function that takes a number and returns its corresponding month name as a string.For example, 
// if you're given 3 as input, your function should return "March", because March is the 3rd month.

// Examples
// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"
// Notes
// Don't forget to return the result.
// You can use flow controll structure switch

function monthName(month) {
    switch (month) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "Month with that number does not exists";
    }
}
console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));