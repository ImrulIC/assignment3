// Question: 1.Date Object:

// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  return dayOfWeek;
}

// Example usage:
const inputDate = "2023-06-20";
const dayOfWeek = getDayOfWeek(inputDate);
console.log(dayOfWeek); // Output: Tuesday

// b. Implement the function to display the day of the week for the current date.

function getDayOfWeek(dateString = new Date().toISOString().split("T")[0]) {
  const date = new Date(dateString);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  return dayOfWeek;
}

// Example usage:
const currentDayOfWeek = getDayOfWeek();
console.log(currentDayOfWeek); // Output: (e.g., Monday)
