// > MAYOR
// < MENOR

let monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

//Import the Month class to create the calendar.

// Get Date information from methods
const currentDate = new Date();
const currentDay = currentDate.getDay();
let numberMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let month = document.querySelector(".month");
month.textContent = monthNames[numberMonth];

console.log("day", currentDay, numberMonth, currentYear);
/*--------------------------DAYS------------------------*/
let days = document.querySelector(".days");

function startDay() {
  let start = new Date(currentYear, numberMonth, 1);
  return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
}

const getTotalDays = (month) => {
  if (month === -1) month = 11;

  if (
    month == 0 ||
    month == 2 ||
    month == 4 ||
    month == 6 ||
    month == 7 ||
    month == 9 ||
    month == 11
  ) {
    return 31;
  } else if (month == 3 || month == 5 || month == 8 || month == 10) {
    return 30;
  } else {
    return isLeap() ? 29 : 28;
  }
};
/*--------------------------MONTH------------------------*/

const writeMonth = (month) => {
  for (let i = startDay(); i > 0; i--) {
    days.innerHTML += `<td class="calendar-day calendar-item">
        ${getTotalDays(numberMonth - 1) - (i - 1)}
        </td>`;
  }

  for (let i = 1; i <= getTotalDays(month); i++) {
    if (i === currentDay) {
      days.innerHTML += `<td class="calendar-day calendar-item today">${i}</td>`;
    } else {
      days.innerHTML += `<td class="calendar-day calendar-item">${i}</td>`;
    }
  }
};

/*--------------------------YEAR------------------------*/
let year = document.querySelector(".year");
year.textContent = currentYear.toString();

// Leap year function
const isLeap = () => {
  return (
    (currentYear % 100 !== 0 && currentYear % 4 === 0) ||
    currentYear % 400 === 0
  );
};

/*----------------------Arrow buttons--------------------------------*/

//declare button and select buttons class.
let prev = document.querySelector(".prev-arrow");
let next = document.querySelector(".next-arrow");

// Function change month

function setNewDate() {
  currentDate.setFullYear(currentYear, numberMonth, currentDay);
  month.textContent = monthNames[numberMonth];
  year.textContent = currentYear.toString();
  days.textContent = "";
  writeMonth(numberMonth);
}

function prevMonth() {
  if (numberMonth !== 0) {
    numberMonth--;
  } else {
    numberMonth = 11;
    currentYear--;
  }
  setNewDate();
}

function nextMonth() {
  if (numberMonth !== 11) {
    numberMonth++;
  } else {
    numberMonth = 0;
    currentYear++;
  }
  setNewDate();
}

prev.addEventListener("click", () => prevMonth());
next.addEventListener("click", () => nextMonth());

writeMonth(numberMonth);
