
let year;

while (year = prompt('Year?')) {
    if (year === "Exit") {
        alert("Thank you for uing our great program!");

        break;
    }

    if (isNaN(year)) {
        alert('Input number, please');

        continue;
    }
    
    if (year % 4 == 0) {
        alert(366);
    }

    if (year % 4 != 0) {
        alert(365);
    }

}


