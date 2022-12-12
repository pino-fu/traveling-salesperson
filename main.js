// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [ 54,342,675,765,23,12,1 ];
// Declare a variable to store the total. Initial value is 0.
let totalMiles = 0;
/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const miles of weeklyMiles) {
    totalMiles += miles
}

const averageMiles = totalMiles / weeklyMiles.length;
// Declare a new variable to store the average miles over time

// Output the average miles and the total miles to the console
console.log(`I average ${averageMiles} miles per week. I have driven a total of ${totalMiles} miles.`);