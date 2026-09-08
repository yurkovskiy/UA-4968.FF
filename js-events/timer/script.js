function updateClock() {
  // 1. Get the current date and time
  const now = new Date();

  // 2. Extract hours, minutes, and seconds
  // We use .toString().padStart(2, '0') to ensure single digits have a leading zero 
  // (e.g., '9' becomes '09')
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // 3. Format the string as HH:MM:SS
  const timeString = `${hours}:${minutes}:${seconds}`;

  // 4. Find the element in the DOM and update its text
  const clockElement = document.getElementById('clock');
  clockElement.textContent = timeString;
}

// 5. Run the function immediately so the clock shows up right away
updateClock();

// 6. Set an interval to run the function every 1000 milliseconds (1 second)
const intervalID = setInterval(updateClock, 1000); // anonymous

setTimeout(function() {
   clearInterval(intervalID);
}, 10000)
