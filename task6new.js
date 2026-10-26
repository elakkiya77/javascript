
// MOVIE TICKET BOOKING SYSTEM
// 1. MOVIE DATA
let movies = [
    {
        id: 101,
        name: "  Avengers  ",
        language: "English",
        price: 200,
        rating: 8.5,
        seats: 20,
        bookingDate: new Date("2026-10-20")
    },
    {
        id: 102,
        name: "Jailer",
        language: "Tamil",
        price: 180,
        rating: 8.0,
        seats: 15,
        bookingDate: new Date("2026-10-21")
    },
    {
        id: 103,
        name: "Spider-Man",
        language: "English",
        price: 150,
        rating: 9.0,
        seats: 25,
        bookingDate: new Date("2026-10-22")
    },
    {
        id: 104,
        name: "Leo",
        language: "Tamil",
        price: 220,
        rating: 8.2,
        seats: 0,
        bookingDate: new Date("2026-10-23")
    }
];

// 2. DATE AND TIME

let today = new Date();

console.log("Current Date:", today);
console.log("Day:", today.getDate());
console.log("Month:", today.getMonth() + 1);
console.log("Year:", today.getFullYear());
console.log("Day of Week:", today.getDay());
console.log("Formatted Date:", today.toLocaleDateString("en-IN"));

// 3. DATE MANIPULATION

let bookingDate = new Date("2026-10-26");

console.log("Booking Date:", bookingDate);

bookingDate.setDate(bookingDate.getDate() + 3);

console.log("Show Date After 3 Days:", bookingDate);

let nextMonth = new Date("2026-10-26");

nextMonth.setMonth(nextMonth.getMonth() + 1);

console.log("Next Month:", nextMonth);

// 4. STRING METHODS

let movieName = "  Avengers  ";
let cleanName = movieName.trim();

console.log("Original Name:", movieName);
console.log("Trim:", cleanName);
// Output: Avengers

console.log("Length:", cleanName.length);
// Output: 8

console.log("Character:", cleanName.charAt(0));
// Output: A

console.log("Character Code:", cleanName.charCodeAt(0));
// Output: 65

console.log("Slice:", cleanName.slice(0, 2));
// Output: Av

console.log("Uppercase:", cleanName.toUpperCase());
// Output: AVENGERS

console.log("Lowercase:", cleanName.toLowerCase());
// Output: avengers

console.log("Includes:", cleanName.includes("ven"));
// Output: true

console.log("Split:", cleanName.split(""));
// Output: ['A', 'v', 'e', 'n', 'g', 'e', 'r', 's']

console.log("Index Of:", cleanName.indexOf("g"));
// Output: 4

console.log("Replace:", cleanName.replace("Avengers", "Beast"));
// Output: Beast

console.log("Starts With:", cleanName.startsWith("Av"));
// Output: true

console.log("Ends With:", cleanName.endsWith("ers"));
// Output: true

// 5. DISPLAY ALL MOVIES - forEach()

movies.forEach(function(movie) {
    console.log(
        movie.id,
        movie.name.trim(),
        movie.language,
        movie.price,
        movie.seats
    );
});

// 6. GET MOVIE NAMES - map()

let movieNames = movies.map(movie =>
    movie.name.trim().toUpperCase()
);

console.log("Movie Names:", movieNames);

// 7. FILTER TAMIL MOVIES - filter()

let tamilMovies = movies.filter(movie =>
    movie.language === "Tamil"
);

console.log(
    "Tamil Movies:",
    tamilMovies.map(movie => movie.name.trim())
);
// Output: ['Jailer', 'Leo']

// 8. FIND A MOVIE - find()

let foundMovie = movies.find(movie =>
    movie.id === 102
);

console.log("Found Movie:", foundMovie);
// Output: Jailer movie object

// 9. FIND MOVIE INDEX - findIndex()

let movieIndex = movies.findIndex(movie =>
    movie.name.trim() === "Spider-Man"
);

console.log("Movie Index:", movieIndex);
// Output: 2

// 10. TOTAL TICKET PRICE - reduce()

let totalPrice = movies.reduce((total, movie) =>
    total + movie.price, 0
);

console.log("Total Price:", totalPrice);
// Output: 750

let averagePrice = totalPrice / movies.length;

console.log("Average Price:", averagePrice);
// Output: 187.5

// 11. SORT BY PRICE - sort()

let sortedMovies = [...movies].sort((a, b) =>
    a.price - b.price
);

console.log(
    "Movies Sorted By Price:",
    sortedMovies.map(movie => ({
        name: movie.name.trim(),
        price: movie.price
    }))
);

// 12. SOME METHOD

let expensiveMovie = movies.some(movie =>
    movie.price > 200
);

console.log("Any Movie Above 200:", expensiveMovie);
// Output: true

// 13. EVERY METHOD

let allSeatsAvailable = movies.every(movie =>
    movie.seats > 0
);

console.log("All Movies Have Seats:", allSeatsAvailable);
// Output: false

// 14. INCLUDES METHOD

let hasAvengers = movieNames.includes("AVENGERS");

console.log("Avengers Available:", hasAvengers);
// Output: true

// 15. SLICE METHOD

let firstTwoMovies = movies.slice(0, 2);

console.log(
    "First Two Movies:",
    firstTwoMovies.map(movie => movie.name.trim())
);
// Output: ['Avengers', 'Jailer']

// 16. SPLICE METHOD

let temporaryMovies = [...movies];

let removedMovie = temporaryMovies.splice(1, 1);

console.log("Removed Movie:", removedMovie[0].name.trim());
// Output: Jailer

console.log("Remaining Movies:", temporaryMovies.length);
// Output: 3

// 17. CONCAT METHOD

let newMovies = ["Amaran", "Good Bad Ugly"];

let allMovies = movieNames.concat(
    newMovies.map(movie => movie.toUpperCase())
);

console.log("All Movie Names:", allMovies);

// 18. FLAT METHOD

let movieGroups = [
    ["Avengers", "Jailer"],
    ["Spider-Man", ["Amaran", "Leo"]]
];

console.log("Flat Movies:", movieGroups.flat());

console.log("All Flat Movies:", movieGroups.flat(Infinity));

// 19. INDEXOF AND LASTINDEXOF

let languages = [
    "Tamil",
    "English",
    "Telugu",
    "Tamil"
];

console.log("First Tamil Index:", languages.indexOf("Tamil"));
// Output: 0

console.log("Last Tamil Index:", languages.lastIndexOf("Tamil"));
// Output: 3

// 20. FINAL SUMMARY

console.log("Total Movies:", movies.length);
// Output: 4

console.log(
    "Movie Names:",
    movies.map(movie => movie.name.trim()).join(", ")
);
// Output: Avengers, Jailer, Spider-Man, Leo

console.log(
    "Highest Ticket Price:",
    Math.max(...movies.map(movie => movie.price))
);
// Output: 220

console.log(
    "Lowest Ticket Price:",
    Math.min(...movies.map(movie => movie.price))
);
// Output: 150

console.log(
    "Available Movies:",
    movies.filter(movie => movie.seats > 0)
        .map(movie => movie.name.trim())
);
// Output: ['Avengers', 'Jailer', 'Spider-Man']